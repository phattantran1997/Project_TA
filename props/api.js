var rooturl ="https://www.google.com/finance"
export default function (code){
  var url =`${rooturl}?q=${code}&output=json`;
  console.log("url", url)
  return fetch(url).then (function(respone){
    respone.json()
    return respone.text();
  }).then (function(text){
    let json =Json.parse(text.replace("//",""))[0];
    return{
      stockIndex: json.l,
      stockChangeRaw: json.c,
      stockChangePercent: json.cp,
    };
  });
}
