import './App.css'

function App() {

  let a = 15;
  // üst tarafada  javascript kodlarımızı yazıyoruz 
  // bu kodları return içerisinde gösterebilmek için yapmamız gereken şekilli parntezler içinde yazmaktır 
  const firstName = "Emre";
  let vize = 60;
  let vize2 = 80;
  let sonuc = true;
  let isimler =  ["emre","yaman","ahmet","mehmet"]
  return (
    <div>
      <p>a değişkenin değeri : {a}</p>
      <p>Yazılımcının Adı  : {firstName}</p>
      <p>ortalama : {(vize + vize2) / 2}</p>
      {sonuc ? <p>Ehliyeti alabilirsin</p>: <p>Ehliteti alamazsın</p>}

      {/* ekrana yukarı sonuca true verdiğimiz için kısa if ile ehilyeti alabilrisin yazar  */}

      {
        (vize+vize2) /2 > 50 ? <p>Dersten Geçtin</p> : <p> Dersten kaldın </p>
      }

      {isimler.map((isim,index) => (
      <div style={{ color : "red" }} key={index}>{isim}</div>
      ))
      }


    </div>
  )
}

export default App
