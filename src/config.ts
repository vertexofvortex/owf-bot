import "dotenv/config";

const getEnvVariable = (key: string) => {
    const variable = process.env[key];

    if (variable === undefined) {
        throw new Error(
            'Some of the environment variables are not specified. Please make "cp .env.example .env" and specify them'
        );
    }

    return variable;
};

const config = {
    VK_TOKEN: getEnvVariable("VK_TOKEN"),
};

export default config;
