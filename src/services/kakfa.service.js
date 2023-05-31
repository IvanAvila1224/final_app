class KafkaService {
  url = 'https://nodeproducer-service-v2-ivanavila1224.cloud.okteto.net';

  reaction = async (userid, objectid, reactionid) => {
    const url = `${this.url}/reactions?userid=${userid}&objectid=${objectid}&reactionid=${reactionid}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        throw new Error('Request failed with status ' + response.status);
      }
    } catch (error) {
      console.log(error.message);
    }
  };



  comment = async (userid, objectid, message) => {
    await fetch(this.url + '/comments?userid=' + userid+'&objectid='+objectid +'&message='+message, {
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
