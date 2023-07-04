class Experiment {
    setCookie(): void {
        const randomNumber: number = Math.random();
        const expires: Date = new Date();
        expires.setMonth(expires.getMonth() + 1);
        document.cookie = `experiment=${randomNumber};expires=${expires.toUTCString()}`;
    }

    getCookie(): number {
        const cookie: string | undefined = document.cookie
            .split('; ')
            .find((row: string) => row.startsWith('experiment'));
        if (cookie) {
            return Number(cookie.split('=')[1]);
        } else {
            this.setCookie();
            return this.getCookie();
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
        const experiments: Record<string, any> | null = JSON.parse(localStorage.getItem('experiments'));

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
                forceDisable: false,
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
            const experiments: Record<string, any> | null = JSON.parse(localStorage.getItem('experiments'));
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
            const randomNumber: number = this.getCookie();
            if (randomNumber <= percentage / 100 && new Date(endDate) > new Date() && enabled) {
                return true;
            }
        }

        return false;
    }
}

export const experiments: Experiment = new Experiment();  