import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "285";
  });

  const key = item.map((data, index) => data.id);
  const date = item.map((data, index) => data.date);

  const [isStellen, setStellen] = useState(false);
  function stellen(state) {
    // console.log("Stellen: " + state);
    setStellen(state);
  }

  return (
    <Layout>
      <Head>
        <title>Brief 306 {date}</title>
      </Head>

    <Brief_wrapper stellen={stellen} key={`wrapper-${key}`} data={item}>
      {/* brief text goes here */}
      {/* Insert Themenmarkierungen */}
      {/* <!-- Themenmarkierung --> */}
      <div type="mark">
        {/* <span type="geschaeftliches" from="#mark.001.s" to="#mark.001.e"/> */}
        <span type="religion" from="#mark.002.s" to="#mark.002.e" />
        {/* <span type="geschaeftliches" from="#mark.003.s" to="#mark.003.e"/> */}
      </div>

      <div>
        {/*TEI front*/}
        <div className="toc toc_body">
          <div className="toc toc_back">
           

            <section className="writing-session" id="index.xml-body.1_div.2">
              <div
                className="page"
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",

                  paddingTop: "15px",
                  paddingLeft: "80px",
                  paddingBottom: "40px",
                }}
              >
                {/* Insert Page 1 */}
                <div className="opener">
                  <div className="dateline text-right">
                    <span className="placeName">Hamm</span>
                    <span className="date">
                      <span className="abbr"> d.</span>
                      <span className="expan">
                        d<span className="ex">en</span>
                      </span>{" "}
                      20
                      <span className="g.enc.tagsdecl.suspension.type1">
                        <sup>
                          <sup className="underline"><span className="orig">ﬅ</span><span className="corr">st</span></sup>
                        </sup>
                         </span>
                      <span className="expan">
                        <sup>
                          <sup className="underline">
                            <span className="orig">ﬅ</span><span className="corr">st</span><span className="ex">en</span>
                          </sup>
                        </sup>
                      </span>
                      April 1826.
                    </span>
                  </div>
                </div>
                <div className="opener">
                  
                  <div className="salute">
                    <span style={{ display: "inline-block" }} width="3em">
                      &nbsp;
                    </span>
                    Ja, lieber
                    <span className="persName">{" "}Friedrich</span>,
                  </div>
                </div>
                <p>
                  der{" "}
                  <sup className="sup" id="txt.add001">
                    Herr
                  </sup>{" "}
                  hat
                  <span className="strike-through" style={{ textDecoration: "line-through" }}>h</span> uns im verflo<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>enen Winter, <span className="orig">ſ</span><span className="corr">s</span>o wie un<span className="orig">ſ</span><span className="corr">s</span>er
                  <br className="lb" />{" "}
                  ganzes Leben hindurch unaus<span className="orig">ſ</span><span className="corr">s</span>prechlich viel Gutes erwie<span className="orig">ſ</span><span className="corr">s</span>en. Wir{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>ind beide
                  <br className="lb" />{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>chon in den Jahren, die das Sprichwort machten:
                  <a id="annot.001.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">{" "}
                  Senectus ipsa morbus
                  </span>
                  <a id="annot.001.e">{/*anchor*/}</a> <br className="lb" />{" "}
                  <span className="strike-through" style={{ textDecoration: "line-through" }}>
                    lat
                  </span>{" "}
                  laut welches wir al<span className="orig">ſ</span><span className="corr">s</span>o immer krank <span className="orig">ſ</span><span className="corr">s</span>eÿn müßten; und dennoch ha
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ben wir für das ganze <span className="date">Jahr 1825</span>.
                  dem Arzt{" "}
                  <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Apotheker nur etwa zwei
                  <br className="lb" />{" "}
                  <span className="abbr"> Rttr.</span>
                  <span className="expan">Reichsthaler</span>
                  <span className="g.rend.script.latin">{" "}
                    <span className="abbr"> b. c.</span>
                    <span className="expan">Bergisch Courant</span>{" "}
                  </span>
                  bezahlt. Wir? – Nein, – ich i<span className="orig">ﬅ</span><span className="corr">st</span> das rechte Wort; ich bekam eine
                  <br className="lb" />{" "}
                  Verhärtung auf das rechte Schlü<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>elbein, welche im obern
                  Flei<span className="orig">ſ</span><span className="corr">s</span>ch eine hohe
                  <br className="lb" />{" "}
                  Ge<span className="orig">ſ</span><span className="corr">s</span>chwul<span className="orig">ﬅ</span><span className="corr">st</span> verur<span className="orig">ſ</span><span className="corr">s</span>achte. Mit Gottes Hülfe zertheilte es der
                  Wundarzt.
                  <br className="lb" />{" "}
                  <a id="mark.001.s">{/*anchor*/}</a>
                  <a id="mark.002.s">{/*anchor*/}</a>
                  <span className="religion">
                    <a id="annot.002.s">{/*anchor*/}</a>Wohl erhob <span className="orig">ſ</span><span className="corr">s</span>ich im
                    Fabriken
                    <span className="orig">⹀</span>
                    <span className="corr">-</span>{" "}
                    <span className="abbr"> u</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    Handlungsgebiet ein Sturm <span className="orig">ſ</span><span className="corr">s</span>o heftig, daß
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>elb<span className="orig">ﬅ</span><span className="corr">st</span> ma<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>ive Pallä<span className="orig">ﬅ</span><span className="corr">st</span>e zu<span className="orig">ſ</span><span className="corr">s</span>ammen<span className="orig">ﬅ</span><span className="corr">st</span>ürzten. Und wiewohl ich mich
                    nicht
                    <br className="lb" />{" "}
                    rühme, tiefe Blicke in das Handlungsgebäude thun zu können:{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>o glaube ich
                    <br className="lb" />{" "}
                    doch, daß die Bauherren <span className="orig">ſ</span><span className="corr">s</span>olcher Pallä<span className="orig">ﬅ</span><span className="corr">st</span>e, zwar nicht alle,
                    aber doch der größte
                    <br className="lb" />{" "}
                    Theil der<span className="orig">ſ</span><span className="corr">s</span>elben <span className="orig">ſ</span><span className="corr">s</span>olchen Ein<span className="orig">ﬅ</span><span className="corr">st</span>urz ver<span className="orig">ſ</span><span className="corr">s</span>chuldet hatten,{" "}
                    <span className="abbr"> u</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    andere mit <span className="orig">ſ</span><span className="corr">s</span>ich ins Ver
                    <br className="g.enc.tagsdecl.hyphenation.eq" />
                    derben zogen.<a id="annot.002.e">{/*anchor*/}</a> Es gehört
                    zur Lebensweisheit, aus dem Bö<span className="orig">ſ</span><span className="corr">s</span>en oder Unangeneh
                    <br className="g.enc.tagsdecl.hyphenation.eq" />
                    men nicht nur das Kleinere zu wählen; <span className="orig">ſ</span><span className="corr">s</span>ondern aus die<span className="orig">ſ</span><span className="corr">s</span>em{" "}
                    <span className="orig">Uebel</span>
                    <span className="corr">Übel</span> noch das
                    <br className="lb" />{" "}
                    Gute zu <span className="orig">ſ</span><span className="corr">s</span>uchen, was darin liegt. Das thun Sie <span className="orig">ſ</span><span className="corr">s</span>elb<span className="orig">ﬅ</span><span className="corr">st</span> <span className="orig">ſ</span><span className="corr">s</span>chon;
                    daher ich es unnö
                    <br className="g.enc.tagsdecl.hyphenation.eq" />
                    thig finde, darüber noch ein Wort zu <span className="orig">ſ</span><span className="corr">s</span>chreiben.
                    <a id="mark.002.e">{/*anchor*/}</a>
                  </span>
                  <a id="mark.001.e">{/*anchor*/}</a>
                </p>
                <p>
                  <a id="annot.003.s">{/*anchor*/}</a>Die Frau
                  <span className="persName">{" "}
                    <span className="underline">
                      Gutacker
                    </span>
                  </span>
                  ,<a id="annot.003.e">{/*anchor*/}</a> welche wir nicht kennen,
                  muß viel Erfahrung haben,
                  <br className="lb" />{" "}
                  wenn <span className="orig">ſ</span><span className="corr">s</span>ie einem Kinde, das <span className="orig">ſ</span><span className="corr">s</span>eine Nahrung mit Appetit zu <span className="orig">ſ</span><span className="corr">s</span>ich
                  nimmt, und
                  <br className="lb" />{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>ich der<span className="orig">ſ</span><span className="corr">s</span>elben mit An<span className="orig">ﬅ</span><span className="corr">st</span>and wieder entlediget, eine gute
                  Ge<span className="orig">ſ</span><span className="corr">s</span>undheit beilegt.
                  <br className="lb" />{" "}
                  Aber <span className="orig">ſ</span><span className="corr">s</span>ie <span className="orig">ﬅ</span><span className="corr">st</span>eht weit hinter mancher hie<span className="orig">ſ</span><span className="corr">s</span>igen Frau zurück, welche
                  es an der
                  <br className="lb" />{" "}
                  Wiege <span className="orig">ſ</span><span className="corr">s</span>ehen kann, wenn das in der<span className="orig">ſ</span><span className="corr">s</span>elben <span className="orig">ſ</span><span className="corr">s</span>chlafende Kind ein
                  Bedürfniß
                  <br className="lb" />{" "}
                  der Ausleerung hat. <a id="teaser.part.001.s">{/*anchor*/}</a>
                  Ihr
                  <span className="persName">{" "}Friedrich</span>, der <span className="orig">ſ</span><span className="corr">s</span>chon jetzt{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>o viel auf Le<span className="orig">ſ</span><span className="corr">s</span>en hält, <span className="orig">ſ</span><span className="corr">s</span>chon
                  <br className="lb" />{" "}
                  von jeher <span className="orig">ſ</span><span className="corr">s</span>o neu
                  <span className="orig" />
                  <span className="corr">-</span> = wißbegierig i<span className="orig">ﬅ</span><span className="corr">st</span>, wollte ich{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>agen, – der durch Fragen
                  <br className="lb" />{" "}
                  <span style={{ display: "inline-block" }} width="63em">
                    &nbsp;
                  </span>
                  <span className="underline">jedem</span>
                </p>
              </div>
              <div
                className="page"
                style={{
                  paddingTop: "35px",
                  paddingLeft: "80px",
                  paddingBottom: "88px",
                  marginBottom: "25px",
                }}
              >
                {/* Insert Page 2 */}
                <p>
                  jedem Dinge auf den Grund kommen will, wird ein<span className="orig">ﬅ</span><span className="corr">st</span> ein großer Ge
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  lehrter werden.<a id="teaser.part.001.e">{/*anchor*/}</a> Im
                  vorigen Herb<span className="orig">ﬅ</span><span className="corr">st</span> kam er jeden Morgen, <span className="orig">ſ</span><span className="corr">s</span>o bald er
                  <br className="lb" />{" "}
                  angezogen war zu mir ge<span className="orig">ſ</span><span className="corr">s</span>prungen: – guten Morgen, Großvater,
                  nun
                  <br className="lb" />{" "}
                  erzähle mir etwas! –{" "}
                  <a id="teaser.part.002.s">{/*anchor*/}</a>Ich werde mich bei{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>einer Wißbegierde wohl für
                  <br className="lb" />{" "}
                  das näch<span className="orig">ﬅ</span><span className="corr">st</span>e Wieder<span className="orig">ſ</span><span className="corr">s</span>ehen auf einige <span className="orig">ſ</span><span className="corr">s</span>einem Alter{" "}
                  <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>einen Fort<span className="orig">ſ</span><span className="corr">s</span>chritten
                  <br className="lb" />{" "}
                  angeme<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>ene Erzählungen vorbereiten mü<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>en.{" "}
                  <a id="teaser.part.002.e">{/*anchor*/}</a>
                  Dem <span className="persName">{" "}Hermann</span> las
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  <span className="orig">ſ</span><span className="corr">s</span>en Sie immer noch <span className="orig">ſ</span><span className="corr">s</span>eine Peit<span className="orig">ſ</span><span className="corr">s</span>che{" "}
                  <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>ein Steckenpferd. Haben doch wir al
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ten Leute noch das Un<span className="orig">ſ</span><span className="corr">s</span>rige, <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  von je her eins gehabt. Der ganze Unter
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  <span className="orig">ſ</span><span className="corr">s</span>chied i<span className="orig">ﬅ</span><span className="corr">st</span> nur, daß wir es mehrmals vertau<span className="orig">ſ</span><span className="corr">s</span>cht haben. Auch für
                  den gemüth
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  lichen <span className="persName">{" "}Herman̅</span> wird die Zeit
                  kommen, wo er das Eigentliche mit dem Un
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  eigentlichen vertau<span className="orig">ſ</span><span className="corr">s</span>cht. Daß die kleine
                  <span className="persName">{" "}Marie</span>, die Mädchen oder Frau
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  en im Allgemeinen – (wobei ich jedoch, um mich gegen jeden{" "}
                  <span className="orig">Ueberfall</span>
                  <span className="corr">Überfall</span>
                  <br className="lb" />{" "}
                  zu decken, Ausnahmen einräume,{" "}
                  <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  es jedem Mädchen{" "}
                  <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  jeder Frau
                  <br className="lb" />{" "}
                  gerne ge<span className="orig">ﬅ</span><span className="corr">st</span>atte, <span className="orig">ſ</span><span className="corr">s</span>ich zu die<span className="orig">ſ</span><span className="corr">s</span>en Ausnahmen zu zählen,) – eitel{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>ind, wer
                  <br className="lb" />{" "}
                  i<span className="orig">ﬅ</span><span className="corr">st</span> Schuld daran? – Wer putzt die kleinen Dingerchen – mit Bändern, net
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ten Kleidern oder Schlü<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>elplaggen, <span className="orig">ﬅ</span><span className="corr">st</span>ellt <span className="orig">ſ</span><span className="corr">s</span>ie vor den Spiegel,{" "}
                  <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>agt „
                  <span className="underline"><span className="orig">ﬅ</span><span className="corr">st</span>aats</span>„
                  <span className="orig">.</span>
                  <span className="corr">?</span>
                  <br className="lb" />{" "}
                  Wer nennt die jungen, heranreifenden Mädchen: „mein <span className="orig">ſ</span><span className="corr">s</span>chönes
                  Kind„; mag
                  <br className="lb" />{" "}
                  es nun Kätchen oder Klärchen heißen
                  <span className="orig">.</span>
                  <span className="corr">?</span> Welcher Bräutigam hält nicht{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>eine Braut
                  <span className="orig">,</span>
                  <span className="corr" />
                  <br className="lb" />{" "}
                  für <span className="orig">ſ</span><span className="corr">s</span>chön, <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>agt ihr auch, daß <span className="orig">ſ</span><span className="corr">s</span>ie es i<span className="orig">ﬅ</span><span className="corr">st</span>. Und wenn der Mann aufhört,
                  <br className="lb" />{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>einer Frau die Schönheit zum Vorwurf zu machen: <span className="orig">ſ</span><span className="corr">s</span>o <span className="orig">ſ</span><span className="corr">s</span>ieht er
                  es doch gerne,
                  <br className="lb" />{" "}
                  nicht daß <span className="orig">ſ</span><span className="corr">s</span>ie <span className="orig">ſ</span><span className="corr">s</span>ich in ihrem Hau<span className="orig">ſ</span><span className="corr">s</span>e täglich reinlich kleide –
                  das{" "}
                  <span className="underline">muß</span> jede
                  <br className="lb" />{" "}
                  erdenkliche Frau – , <span className="orig">ſ</span><span className="corr">s</span>ondern, daß <span className="orig">ſ</span><span className="corr">s</span>ie <span className="orig">ſ</span><span className="corr">s</span>ich bei
                  Feierlichkeiten,
                  <span className="abbr"> z. B.</span>
                  <span className="expan">
                    z<span className="ex">um</span>{" "}
                    <span className="ex"> </span>B
                    <span className="ex">ei<span className="orig">ſ</span><span className="corr">s</span>piel</span>{" "}
                  </span>
                  Kindtau
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  fen, Hochzeiten, Concerten{" "}
                  <span className="abbr"> p.p.</span>
                  <span className="expan">
                    p<span className="ex">erge</span> <span className="ex" />p
                    <span className="ex">erge</span>
                  </span>{" "}
                  wirklich etwas putze. Hiemit will ich
                  <br className="lb" />{" "}
                  nun behauptet haben, daß wir Männer nicht alleine aber <span className="orig">ſ</span><span className="corr">s</span>o
                  eitel <span className="orig">ſ</span><span className="corr">s</span>ind
                  <br className="lb" />{" "}
                  als das weibliche Ge<span className="orig">ſ</span><span className="corr">s</span>chlecht, <span className="orig">ſ</span><span className="corr">s</span>ondern daß wir in die<span className="orig">ſ</span><span className="corr">s</span>em <span className="orig">ſ</span><span className="corr">s</span>o gar
                  die Eitel
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  <span className="underline">keit</span>
                  </p>
              </div>

              <div
                className="page"
                style={{
                  paddingTop: "40px",
                  paddingLeft: "70px",
                  paddingBottom: "73px",
                }}
              >
                {/* Insert Page 3 */}
                <p>
                  keit anfachen <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  nähren. Das mag ein Paradoxon <span className="orig">ſ</span><span className="corr">s</span>cheinen; aber wenn
                  <br className="lb" />{" "}
                  man darüber die Stimmen <span className="orig">ſ</span><span className="corr">s</span>ammeln,{" "}
                  <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  die Sache hiedurch <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  durch Erhebung
                  <br className="lb" />{" "}
                  eines Schreiens wollte entscheiden la<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>en: <span className="orig">ſ</span><span className="corr">s</span>o wären gewiß
                  nicht nur die
                  <br className="lb" />{" "}
                  mei<span className="orig">ﬅ</span><span className="corr">st</span>en Stimmen, <span className="orig">ſ</span><span className="corr">s</span>ondern auch das laute<span className="orig">ﬅ</span><span className="corr">st</span>e Ge<span className="orig">ſ</span><span className="corr">s</span>chrei auf meiner
                  Seite.
                  <br className="lb" />{" "}
                  Denn, außer dem ganzen weiblichen Ge<span className="orig">ſ</span><span className="corr">s</span>chlechte, würden mir doch
                  einige
                  <br className="lb" />{" "}
                  Männer beifallen. Meine Parthei könnte die<span className="orig">ſ</span><span className="corr">s</span>e Wahrheit
                  volltönend vier
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  <span className="orig">ﬅ</span><span className="corr">st</span>immig <span className="orig">ſ</span><span className="corr">s</span>ingen, <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  der Gegenparthei würden die Sopran<span className="orig">ﬅ</span><span className="corr">st</span>immen fehlen.
                </p>
                <p>
                  <span style={{ display: "inline-block" }} width="1char">
                    &nbsp;
                  </span>
                  <a id="mark.003.s">{/*anchor*/}</a>Ihr
                  <a id="annot.004.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">{" "}Conto–Corrent</span>
                  <a id="annot.004.e">{/*anchor*/}</a> enthält ohne Ihr
                  Ver<span className="orig">ſ</span><span className="corr">s</span>chulden ein Ver<span className="orig">ſ</span><span className="corr">s</span>ehen. Sie konn
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ten nicht wi<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>en, daß ich <span className="abbr"> d</span>
                  <span className="expan">
                    d<span className="ex">em </span>
                  </span>
                  <span className="g.enc.tagsdecl.suspension.type2"> (H.</span>
                  <span className="expan">
                    H<span className="ex">errn</span>
                  </span>
                  <span className="persName">{" "}
                    <span className="abbr">
                      {" "}<span className="hi">vdKuhlen</span>
                    </span>
                    <span className="expan">
                      v<span className="ex">on </span>d
                      <span className="ex">er </span>Kuhlen
                    </span>
                  </span>
                  <span className="abbr"> d.</span>
                  <span className="expan">
                    d<span className="ex">en</span>
                  </span>{" "}
                  14. Januar die<span className="orig">ſ</span><span className="corr">s</span>es Jahrs zum
                  <br className="lb" />{" "}
                  zweiten Mal die vollen 75.{" "}
                  <span className="abbr"> rttr.</span>
                  <span className="expan">Reichsthaler</span> gegen Quittung
                  namens
                  <span className="orgName">
                    <span className="g.rend.script.latin">{" "}
                      <span className="abbr"> Casp.</span>
                      <span className="expan">
                        Casp<span className="ex">ar</span>
                      </span>
                      {" "}Engels
                    </span>
                    <br className="lb" />{" "}
                    Söhne
                  </span>
                  {" "}bezahlt habe, <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  es, ohne mir wehe zu thun, zahlen konnte. Die<span className="orig">ſ</span><span className="corr">s</span>e 2
                  <sup>
                    <sup className="underline">te</sup>
                  </sup>
                  <br className="lb" />{" "}
                  Quittung <span className="orig">ﬅ</span><span className="corr">st</span>eht auf dem Blatt der er<span className="orig">ﬅ</span><span className="corr">st</span>en. Unter die<span className="orig">ſ</span><span className="corr">s</span>elben wird
                  bei
                  <br className="lb" />{" "}
                  Leben <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Wohl<span className="orig">ſ</span><span className="corr">s</span>ein im künftigen Januar auch die dritte kommen, wenn
                  <br className="lb" />{" "}
                  <span style={{ display: "inline-block" }} width="-4em">
                    &nbsp;
                  </span>
                  <span className="add" id="txt.add002">
                    Sie 
                  </span>
                  anders mich mit der Zahlung ferner beauftragen.
                </p>
                <p>
                  <span style={{ display: "inline-block" }} width="1char">
                    &nbsp;
                  </span>
                  Wenn Sie
                  <span className="g.rend.script.latin">{" "}Snethlage</span> bei{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>einer Rei<span className="orig">ſ</span><span className="corr">s</span>e nach
                  <span className="placeName">Berlin</span> die 6.
                  <span className="g.rend.script.latin">{" "}
                    <span className="abbr"> Fr. d’or</span>
                    <span className="expan">Friedrichs d’or</span>
                  </span>
                  für
                  <br className="lb" />{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>einen Vater in meinem Namen mitgeben wollen: <span className="orig">ſ</span><span className="corr">s</span>o wird mir
                  <br className="lb" />{" "}
                  das <span className="orig">ſ</span><span className="corr">s</span>ehr lieb <span className="orig">ſ</span><span className="corr">s</span>eÿn. Ich er<span className="orig">ſ</span><span className="corr">s</span>pare dann das Konto. Haben Sie nur
                  dann die
                  <br className="lb" />{" "}
                  Güte mir den Betrag die<span className="orig">ſ</span><span className="corr">s</span>er 6.{" "}
                  <span className="abbr">
                    <span className="g.rend.script.latin">{" "}Fr. d’or</span>
                  </span>
                  in <span className="abbr"> Berg.</span>
                  <span className="expan">
                    Berg<span className="ex">i<span className="orig">ſ</span><span className="corr">s</span>ch</span>
                  </span>{" "}
                  <span className="abbr"> Cour.</span>
                  <span className="expan">
                    Cour<span className="ex">ant</span>
                  </span>{" "}
                  zu melden. Entweder
                  <br className="lb" />{" "}
                  weder <span className="orig">ſ</span><span className="corr">s</span>ende ich Ihnen die<span className="orig">ſ</span><span className="corr">s</span>en gelegentlich{" "}
                  <span className="orig">baar</span>
                  <span className="corr">bar</span> zurück, oder bezahle ihn
                  <br className="lb" />{" "}
                  durch Lieferung von Butter, wenn anders die dortigen
                  Hausfrauen die
                  <br className="lb" />{" "}
                  hie<span className="orig">ſ</span><span className="corr">s</span>ige zum Kochen geeigneter finden, als die dortige.
                  <a id="mark.003.e">{/*anchor*/}</a>
                </p>
                <div className="closer">
                  <span style={{ display: "inline-block" }} width="1char">
                    &nbsp;
                  </span>
                  Leben Sie wohl! <a id="annot.005.s">{/*anchor*/}</a>Gott <span className="orig">ſ</span><span className="corr">s</span>egne
                  Sie{" "}
                  <a id="annot.005.e">{/*anchor*/}</a>
                  <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  die
                  <span className="abbr"> l.</span>
                  <span className="expan">
                    l<span className="ex">ieben</span>
                  </span>{" "}
                  Ihrigen! tau<span className="orig">ſ</span><span className="corr">s</span>end Grüße an
                  <br className="lb" />{" "}
                  alle dortigen Fremden von allen hie<span className="orig">ſ</span><span className="corr">s</span>igen. Mit Liebe{" "}
                  <span className="abbr"> u</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Achtung der
                  <br className="lb" />{" "}
                  <div className="signed">
                    <span style={{ display: "inline-block" }} width="56em">
                      &nbsp;
                    </span>
                    Ihrige
                    <br className="lb" />{" "}
                    <span style={{ display: "inline-block" }} width="54em">
                      &nbsp;
                    </span>
                    <span className="g.rend.script.latin">{" "}van Haar</span>.
                  </div>
                </div>
              </div>
              
            </section>
          </div>
        </div>
      </div>
    </Brief_wrapper>
    </Layout>
  );
}
