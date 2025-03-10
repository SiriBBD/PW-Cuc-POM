module.exports={  
    default: {
        tags:process.env.npm_config_TAGS || "",
        formatOptions: {
        snippetInterface: "async-await"
    },
        paths: [
            "src/test/features/"
        ],
        dryrun:true,        
        require: [
            "src/test/steps/*.ts",
            "src/hooks/*.ts"
        ],
        requireModule: ["ts-node/register"],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"            
        ],
        parallel: 1
    }
}
