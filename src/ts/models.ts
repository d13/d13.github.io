
export namespace Model {
    export interface Profile {
        name: string;
        title: string;
    }

    export interface Experience {
        company: string;
        title: string;
        started: Date;
        end?: Date;
        description?: string;
        skills: string[];
        technologies: string[];
    }

    export interface Portfolio {}

    export interface Company {

    }
}

export interface BootstrapModel {
    profile: Model.Profile;
    experience: Model.Experience[];
    portfolio: Model.Portfolio[];
    companies: Model.Company[];
}