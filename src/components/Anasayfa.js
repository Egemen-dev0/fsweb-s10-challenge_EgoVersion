import Img from "./../assets/gratitude.jpg";

export const AnasayfaFn = () => {
    return (
        <div className="max-w-xl mx-auto px-4 pb-8">
        <div className="beyazKutu">
          <img src={Img} alt="" />
          <div className="px-8 pt-7 pb-6 text-sm">
            <h1 className="text-3xl text-amber-600">
              Minnet Günlüğü Nedir?
            </h1>
            <p className="my-2">
              Minnet günlüğü, kişinin hayatındaki olumlu şeylere
              odaklanması, minnettarlık ve şükran duygusunu hissetmesi için
              sık sık teşekkür ettiği şeyleri yazdığı bir tür günlüktür.
              Zihinsel iyi oluş için basit fakat oldukça etkili bir
              yöntemdir ve kişinin hayata pozitif bir bakış açısı
              geliştirmesine yardımcı olabilir.{" "}
            </p>
          </div>
        </div>
      </div>
    )
}