<script lang="ts">
	import { config } from '$lib/config';
	import { T, useFrame } from '@threlte/core';
	import { OrbitControls, useGltf } from '@threlte/extras';
	import Effects from '$lib/components/3DAnimation/Effects.svelte';

	let rotationX: number = 0;
	let rotationY: number = 0.75;
	let y: number = 3;
	let lighting: number = 2;

	// Rotates model on `Y` axis
	useFrame((_, delta) => {
		// Lighting
		lighting = Math.sin(Date.now() / 1000) + 2;
	});

	// Spooky floating ghost 👻
	function levitate() {
		const time = Date.now() / 1000;
		const speed = 0.5;
		const offset = -3.25;
		y = Math.sin(time * speed) + offset;
		requestAnimationFrame(levitate);
	}

	levitate();
</script>

<svelte:window
	on:mousemove={(e) => {
		// Left and right moves it on the Y axis
		rotationY = (e.clientX - window.innerWidth / 2) / 1000 + 0.75;
	}}
/>

<!-- Effects postprocessing -->
<Effects />

<!-- Orthographic camera -->
<T.OrthographicCamera position={[10, 9, 10]} zoom={40} makeDefault>
	<!-- Controls -->
	<OrbitControls enableDamping={false} />
</T.OrthographicCamera>

<!-- Ambient light for ambience -->
<T.AmbientLight color="#000" intensity={lighting} />

<!-- Main light -->
<T.PointLight intensity={30} position={[7, 5, 7]} color="#fff" />

<!-- Garden -->
{#await useGltf(config.threeDemModel.assetFile) then fnaf}
	<T
		is={fnaf.scene}
		rotation.y={rotationY}
		rotation.x={rotationX}
		position={[5.5, y, 5]}
		scale={60}
	/>
{/await}
