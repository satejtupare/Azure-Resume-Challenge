using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Configuration;
using System.Net.Http;
using System.Text;




namespace Company.Function
{
    public static class GetResumeCounter
    {
        [FunctionName("GetResumeCounter")]
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
          [CosmosDB(databaseName: "AzureResume", containerName:"Counter", Connection = "AzureResumeConnetionString", Id = "1",PartitionKey ="1")] Counter counter,
         [CosmosDB(databaseName: "AzureResume", containerName:"Counter", Connection = "AzureResumeConnetionString", Id = "1",PartitionKey ="1")] out Counter updatedCounter,

            // [DocumentDB(databaseName: "AzureResume", collectionName: "Counter", ConnectionStringSetting = "AzureResumeConnectionString", Id = "1")] Counter counter,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");
            updatedCounter = counter;
            updatedCounter.Tej +=1;
            var Jsontoreturn = JsonConvert.SerializeObject(counter);
            
            return new  HttpResponseMessage(System.Net.HttpStatusCode.OK){
                Content = new StringContent(Jsontoreturn, Encoding.UTF8,"application/json")
            };
        }
    }
}
