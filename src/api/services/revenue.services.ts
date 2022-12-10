interface RevenueInterface {
    amount: number;
    currency: string;
    date: Date;
    domain: string;
}

class Revenue implements RevenueInterface {
    amount: number;
    currency: string;
    date: Date;
    domain: string;

    constructor(amount: number, currency: string, date: Date, domain: string) {
        this.amount = amount;
        this.currency = currency;
        this.date = date;
        this.domain = domain;
    }

    getAmount() {
        return this.amount;
    }

    getCurrency() {
        return this.currency;
    }

    getDate() {
        return this.domain;
    }

    getFullInformation() {
        return `$ ${this.amount} ${this.currency} of revenue generated on ${this.date} for this domain: ${this.domain}`;
    }
}

interface RevenueServiceInterface {
    revenueData(): RevenueInterface;
    AllRevenueData(): RevenueInterface[];
}

class RevenueService implements RevenueServiceInterface {
    public revenueData(): RevenueInterface {
        try {
            const Jan = new Revenue(373.67, "CAD", new Date("Nov, 30, 2022"), "B2B");

            return Jan;
        } catch (error) {
            throw error;
        }
    }

    public AllRevenueData(): RevenueInterface[] {
        try {
            const Jan = new Revenue(373.67, "CAD", new Date("Jan, 31, 2022"), "B2B");
            const Feb = new Revenue(374.2, "CAD", new Date("Feb, 28, 2022"), "B2B");
            const Mar = new Revenue(359.98, "CAD", new Date("Mar, 31, 2022"), "B2B");
            const Apr = new Revenue(374.2, "CAD", new Date("Apr, 30, 2022"), "B2B");
            const May = new Revenue(953.56, "CAD", new Date("May, 31, 2022"), "B2B");
            const Jun = new Revenue(554.08, "CAD", new Date("Jun, 30, 2022"), "B2B");
            const Jul = new Revenue(655.9, "CAD", new Date("Jul, 31, 2022"), "B2B");
            const Aug = new Revenue(691.68, "CAD", new Date("Aug, 31, 2022"), "B2B");
            const Sep = new Revenue(725.32, "CAD", new Date("Sep, 30, 2022"), "B2B");
            const Oct = new Revenue(874.07, "CAD", new Date("Oct, 31, 2022"), "B2B");
            const Nov = new Revenue(751.62, "CAD", new Date("Nov, 30, 2022"), "B2B");
            const Dec = new Revenue(653.66, "CAD", new Date("Dec, 31, 2022"), "B2B");

            const revenue2022 = [Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec];
            console.log(revenue2022);
            return revenue2022;
        } catch (error) {
            throw error;
        }
    }
}
