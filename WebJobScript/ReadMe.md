This sample demonstrates how to deploy the **Microsoft.Azure.WebJobs.Script** runtime to a traditional Continuous WebJob.

Notes:

* To run the sample, you need to configure your `AzureWebJobsStorage` and `AzureWebJobsDashboard` settings as you would normally.
* The project references the latest prerelease **Microsoft.Azure.WebJobs.Script** prerelease package (currently only available on MyGet instructions [here](https://github.com/Azure/azure-webjobs-sdk/wiki/%22Nightly%22-Builds))
* In the Console Main method, an instance of the `ScriptHost` is started, and will run continuously
* All scripts are under the **Functions** folder. These files can be anywhere, as long as you set `ScriptHostConfiguration.RootScriptPath` to that path
* Once you have things running locally, you can deploy to a WebJob as you would normally. See [here](https://azure.microsoft.com/en-us/documentation/articles/websites-dotnet-deploy-webjobs/) for more info.
* When running locally some language support requires additional configuration. See the [Samples](https://github.com/Azure/azure-webjobs-sdk-script/wiki#samples) section for more info.

For more information on `ScriptHost` and to report any issues, see the [azure-webjobs-sdk-script](https://github.com/Azure/azure-webjobs-sdk-script) repo.
