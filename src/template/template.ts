import { readFileSync } from "fs";

export enum Templates {
    Rank = "rank",
}

export interface TemplateValues {
    [key: string]: string | number | boolean | null | undefined;
}

class Template {
    constructor(templateName: Templates, values: TemplateValues) {
        return Template.parse(templateName, values);
    }

    static parse = (templateName: Templates, values: TemplateValues) => {
        // TODO: Decide what to do with that:
        let template = readFileSync(`src/locales/${templateName}.template`, {
            encoding: "utf-8",
            flag: "r",
        });
        const results = template.matchAll(/{{\s*([\w\.\-]+)\s*}}/gm);

        for (const value of results) {
            template = template.replace(value[0], String(values[value[1]]));
        }

        return template;
    };
}

export default Template;
