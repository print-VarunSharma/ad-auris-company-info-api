import { linkSync } from "fs";

interface InvestorInterface {
    investorId: number;
    firstName: string;
    lastName: string;
    linkedInUrl: string;
    email: string;
    role: string;
    company: string;
}

class Investor implements InvestorInterface {
    investorId: number;
    firstName: string;
    lastName: string;
    linkedInUrl: string;
    email: string;
    role: string;
    company: string;

    constructor(investorId: number, firstName: string, lastName: string, linkedInUrl: string, email: string, role: string, company: string) {
        this.investorId = investorId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.linkedInUrl = linkedInUrl;
        this.email = email;
        this.role = role;
        this.company = company;
    }

    getInvestorId() {
        return this.investorId;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getRole() {
        return this.role;
    }

    getCompany() {
        return this.company;
    }
    getFullInformation() {
        return `Investor Id: ${this.investorId} Investor Name: ${this.firstName} ${this.lastName}`;
    }

    getLinkedInUrl() {
        return this.linkedInUrl;
    }

    getEmail() {
        return this.email;
    }
}

interface InvestorServiceInterface {
    investorProfileData(): InvestorInterface;
    allInvestorProfileData(): InvestorInterface[];
}

class InvestorService implements InvestorServiceInterface {
    public investorProfileData(): InvestorInterface {
        try {
            const TylerN = new Investor(
                5,
                "Tyler",
                "Noorwood",
                "https://linkedin.com/tyler-noorwood",
                "tyler@antler.com",
                "Investment Lead",
                "Antler"
            );
            return TylerN;
        } catch (error) {
            throw error;
        }
    }

    public allInvestorProfileData(): InvestorInterface[] {
        const TylerN = new Investor(5, "Tyler", "Noorwood", "https://linkedin.com/tyler-noorwood", "tyler@antler.com", "Investment Lead", "Antler");
        const DanielHa = new Investor(1, "Daniel", "Ha", "https://linkedin.com/daniel-ha", "daniel@xx.com", "Investment Lead", "The XX");
        const YokoOno = new Investor(
            2,
            "Yoko",
            "Ono",
            "https://linkedin.com/Yoko-ono",
            "yoko@firstrowventures.com",
            "Investment Lead",
            "First Row Ventures"
        );

        const investors = [TylerN, DanielHa, YokoOno];
        console.log(investors);
        return investors;
    }
}

export default new InvestorService();
