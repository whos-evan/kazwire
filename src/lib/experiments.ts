class experiment {
    // Set a cookie with a large random number for 30 days.
    // This is used to determine if the user is in the experiment or not.
    setCookie() {
        const randomNumber = Math.random()
        const expires = new Date()
        expires.setMonth(expires.getMonth() + 1)
        document.cookie = `experiment=${randomNumber};expires=${expires.toUTCString()}`
    }

    // Get the cookie's number value
    getCookie() {
        const cookie = document.cookie
            .split('; ')
            .find((row) => row.startsWith('experiment'))
        if (cookie) {
            return Number(cookie.split('=')[1])
        } else {
            this.setCookie()
            return this.getCookie()
        }
    }

    getExperiments() {
        const experiments = JSON.parse(localStorage.getItem('experiments'))
        if (!experiments) {
            localStorage.setItem('experiments', JSON.stringify({}))
            return {}
        }
        return experiments
    }

    // Fetch the expierment data from the localStorage and return it
    getExperimentData(id: string) {
        const experiments = JSON.parse(localStorage.getItem('experiments'))
        return experiments[id]
    }

    // Fetch or create the expierment data from the localStorage and return it
    fetchOrCreateExperimentData(id: string, endDate: string, description: string, percentage: number, enabled: boolean) {
        const experiments = JSON.parse(localStorage.getItem('experiments'))

        // If the end date has past then don't bother saving it
        if (new Date(endDate) < new Date()) {
            return
        }

        // Check to make sure that they don't differ at all
        // If they do, then we need to update the localStorage
        if (experiments && experiments[id] && experiments[id].endDate === endDate && experiments[id].description === description && experiments[id].percentage === percentage && experiments[id].enabled === enabled) {
            return experiments[id]
        } else {
            experiments[id] = {
                endDate,
                description,
                percentage,
                enabled,
                forceEnable: false,
                forceDisable: false,
            }
            localStorage.setItem('experiments', JSON.stringify(experiments))
            return experiments[id]
        }
    }

    removeExperiment(id: string) {
        const experiments = JSON.parse(localStorage.getItem('experiments'))
        if (!experiments) {
            return
        }
        if (!experiments[id]) {
            return
        }
        delete experiments[id]
        localStorage.setItem('experiments', JSON.stringify(experiments))
    }

    // Force enable toggle an experiment
    forceEnableToggle(id: string) {
        const experiments = JSON.parse(localStorage.getItem('experiments'))
        if (!experiments) {
            return
        }
        if (!experiments[id]) {
            return
        }
        experiments[id].forceEnable = true
        experiments[id].forceDisable = false
        localStorage.setItem('experiments', JSON.stringify(experiments))
    }

    forceDisableToggle(id: string) {
        const experiments = JSON.parse(localStorage.getItem('experiments'))
        if (!experiments) {
            return
        }
        if (!experiments[id]) {
            return
        }
        experiments[id].forceDisable = true
        experiments[id].forceEnable = false
        localStorage.setItem('experiments', JSON.stringify(experiments))
    }


    // Check if the user should see the experiment or not
    // Takes into account the percent chance of seeing it, the end date, and if it is enabled 
    shouldShow(id: string) {
        // If the percentage, end date, and enabled are all in order, return true
        // The percentage should be converted to a decimal to align with the random number
        const experimentData = this.getExperimentData(id)

        // If the end date has past then remove it
        if (experimentData && new Date(experimentData.endDate) < new Date()) {
            const experiments = JSON.parse(localStorage.getItem('experiments'))
            delete experiments[id]
            localStorage.setItem('experiments', JSON.stringify(experiments))
            return false
        }

        if (experimentData) {
            if (experimentData.forceDisable) {
                return false
            }
            if (experimentData.forceEnable) {
                return true
            }
            const { percentage, endDate, enabled } = experimentData
            const randomNumber = this.getCookie()
            if (randomNumber <= percentage / 100 && new Date(endDate) > new Date() && enabled) {
                return true
            }
        }
    }
}

export const experiments = new experiment()