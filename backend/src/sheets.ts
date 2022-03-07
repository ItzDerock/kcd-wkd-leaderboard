import config from "./config";
import { GoogleSpreadsheet } from "google-spreadsheet";
import getLogger from "./utils/logger";

const sheets = new GoogleSpreadsheet(config.googleSheets.sheetId);
export default sheets;

sheets.useApiKey(config.googleSheets.apiKey);
sheets.loadInfo().then(() => {
    getLogger('google-sheets').info(`Loaded document "${sheets.title}"`);
}).catch(error => {
    getLogger('google-sheets').error(`Failed to load document "${config.googleSheets}"`, error);
});