class Experiment {
	setCookie(experimentName: string): void {
		const randomNumber: number = Math.random();
		const expires: Date = new Date();
		expires.setMonth(expires.getMonth() + 1);
		document.cookie = `${experimentName}_experiment=${randomNumber};expires=${expires.toUTCString()}`;
	}

	getCookie(experimentName: string): number {
		const cookie: string | undefined = document.cookie
			.split('; ')
			.find((row: string) => row.startsWith(experimentName + '_experiment'));
		if (cookie) {
			return Number(cookie.split('=')[1]);
		} else {
			this.setCookie(experimentName);
			return this.getCookie(experimentName);
		}
	}

	getExperiments(): Record<string, any> {
		const experiments: Record<string, any> | null = JSON.parse(localStorage.getItem('experiments'));
		if (!experiments) {
			localStorage.setItem('experiments', JSON.stringify({}));
			return {};
		}
		return experiments;
	}

	getExperimentData(id: string): any {
		const experiments: Record<string, any> | null = JSON.parse(localStorage.getItem('experiments'));
		return experiments[id];
	}

	fetchOrCreateExperimentData(
		id: string,
		endDate: string,
		description: string,
		percentage: number,
		enabled: boolean
	): any {
		let experiments: Record<string, any> | null = JSON.parse(localStorage.getItem('experiments'));

		if (!experiments) {
			localStorage.setItem('experiments', JSON.stringify({}));
			experiments = {};
		}

		if (new Date(endDate) < new Date()) {
			return;
		}

		if (
			experiments &&
			experiments[id] &&
			experiments[id].endDate === endDate &&
			experiments[id].description === description &&
			experiments[id].percentage === percentage &&
			experiments[id].enabled === enabled
		) {
			return experiments[id];
		} else {
			experiments[id] = {
				endDate,
				description,
				percentage,
				enabled,
				forceEnable: false,
				forceDisable: false
			};
			localStorage.setItem('experiments', JSON.stringify(experiments));
			return experiments[id];
		}
	}

	removeExperiment(id: string): void {
		const experiments: Record<string, any> | null = JSON.parse(localStorage.getItem('experiments'));
		if (!experiments) {
			return;
		}
		if (!experiments[id]) {
			return;
		}
		delete experiments[id];
		localStorage.setItem('experiments', JSON.stringify(experiments));
	}

	forceEnableToggle(id: string): void {
		const experiments: Record<string, any> | null = JSON.parse(localStorage.getItem('experiments'));
		if (!experiments) {
			return;
		}
		if (!experiments[id]) {
			return;
		}
		experiments[id].forceEnable = true;
		experiments[id].forceDisable = false;
		localStorage.setItem('experiments', JSON.stringify(experiments));
	}

	forceDisableToggle(id: string): void {
		const experiments: Record<string, any> | null = JSON.parse(localStorage.getItem('experiments'));
		if (!experiments) {
			return;
		}
		if (!experiments[id]) {
			return;
		}
		experiments[id].forceDisable = true;
		experiments[id].forceEnable = false;
		localStorage.setItem('experiments', JSON.stringify(experiments));
	}

	shouldShow(id: string): boolean {
		const experimentData: any = this.getExperimentData(id);

		if (experimentData && new Date(experimentData.endDate) < new Date()) {
			const experiments: Record<string, any> | null = JSON.parse(
				localStorage.getItem('experiments')
			);
			delete experiments[id];
			localStorage.setItem('experiments', JSON.stringify(experiments));
			return false;
		}

		if (experimentData) {
			if (experimentData.forceDisable) {
				return false;
			}
			if (experimentData.forceEnable) {
				return true;
			}
			const { percentage, endDate, enabled } = experimentData;
			const randomNumber: number = this.getCookie(id);
			if (randomNumber <= percentage / 100 && new Date(endDate) > new Date() && enabled) {
				return true;
			}
		}

		return false;
	}

	getNumberOfShownExperiments(): number {
		let number = 0;
		const experiments: Record<string, any> | null = JSON.parse(localStorage.getItem('experiments'));
		if (!experiments) {
			return 0;
		}

		// run shouldShow() on all experiments to see how many are shown
		Object.keys(experiments).forEach((id: string) => {
			if (this.shouldShow(id)) {
				number++;
			}
		});

		return number;
	}
}

export const experiments: Experiment = new Experiment();
