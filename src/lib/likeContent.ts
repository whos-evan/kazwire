import { isLiked } from './stores';

// Must be intiialized on the client side
class GameLike {
	like(id: string) {
		localStorage.setItem(id + '_GAME_LIKE', '1');
	}

	dislike(id: string) {
		localStorage.setItem(id + '_GAME_LIKE', '-1');
	}

	toggle(id: string) {
		if (this.isLiked(id)) {
			this.dislike(id);
            isLiked.set(false);
		} else {
			this.like(id);
            isLiked.set(true);
		}
	}

	isLiked(id: string) {
		if (localStorage.getItem(id + '_GAME_LIKE') == '1') {
			isLiked.set(true);
			return true;
		}
		isLiked.set(false);
		return false;
	}

    fetchLikes() {
        let likes: string[] = [];
        // ENSURE THAT THE APP IS LIKED WITH A POSITIVE 1
        for (let i = 0; i < localStorage.length; i++) {
            let key: string = localStorage.key(i);
            if (key.endsWith('_GAME_LIKE')) {
                let id = key.replace('_GAME_LIKE', '');
                if (localStorage.getItem(id + '_GAME_LIKE') == '1') {
                    likes.push(id);
                }
            }
        }

        return likes;
    }
}

// Must be intiialized on the client side
class AppLike {
	like(id: string) {
		localStorage.setItem(id + '_APP_LIKE', '1');
	}

	dislike(id: string) {
		localStorage.setItem(id + '_APP_LIKE', '-1');
	}

	toggle(id: string) {
		if (this.isLiked(id)) {
			this.dislike(id);
            isLiked.set(false);
		} else {
			this.like(id);
            isLiked.set(true);
		}
	}

	isLiked(id: string) {
		if (localStorage.getItem(id + '_APP_LIKE') == '1') {
			isLiked.set(true);
			return true;
		}
		isLiked.set(false);
		return false;
	}

    fetchLikes() {
        let likes: string[] = [];
        // ENSURE THAT THE APP IS LIKED WITH A POSITIVE 1
        for (let i = 0; i < localStorage.length; i++) {
            let key: string = localStorage.key(i);
            if (key.endsWith('_APP_LIKE')) {
                let id = key.replace('_APP_LIKE', '');
                if (localStorage.getItem(id + '_APP_LIKE') == '1') {
                    likes.push(id);
                }
            }
        }

        return likes;
    }
}

export const gameLike = new GameLike();
export const appLike = new AppLike();
