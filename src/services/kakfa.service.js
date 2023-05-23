class KafkaService {
  
   url = 'https://nodeproducer-service-v2-ivanavila1224.cloud.okteto.net/';
 
   reaction = async (name) => {
     await fetch(this.url + 'like?name=' + name, {
       method: 'GET',
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
       },
     })
       .then((response) => response.json())
       .then((data) => {
         console.log(data);
       })
       .catch((err) => {
         console.log(err.message);
       });
   };
 }
 
 const kafkaService = new KafkaService();
 export default kafkaService;