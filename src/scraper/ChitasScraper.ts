// TODO must delegate date control to chumash scraper
// TODO responsible for looping through a given amount of time
// TODO needs to insert to the DB
// TODO needs to do some checks before inserting to the db
import mongoose from "mongoose";
import { mongoDbConfig } from "../config/mongoDbConfig";
import { ChumashScraper } from "./ChumashScraper";

class ChitasScraper {
    private chumashScraper: ChumashScraper;
    // TODO get types for the model up and running
    // https://stackoverflow.com/questions/34482136/mongoose-the-typescript-way
    private chumashModel: any;
    constructor() {
        this.chumashScraper = new ChumashScraper();
        mongoDbConfig();
        this.chumashModel = mongoose.model("Chumash");
    }
    /**
     * processChumash
     */
    public processChumash() {
        this.chumashScraper.getContent().then((chumashContent) => {
            // TODO insert chumash content to DB
            // this.chumashModel;
        });
    }
}
