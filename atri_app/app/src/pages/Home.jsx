import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Upload } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { Cascader } from "@atrilabs/react-component-manifests/src/manifests/Cascader/Cascader.tsx";
import { Dropdown } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Modal } from "@atrilabs/react-component-manifests/src/manifests/Modal/Modal.tsx";
import { Testimonial } from "@atrilabs/react-component-manifests/src/manifests/Testimonial/Testimonial.tsx";
import { Accordion } from "@atrilabs/react-component-manifests/src/manifests/Accordion/Accordion.tsx";
import { useFirst_BlockCb, useFlex13Cb, useButoon_BoxCb, useFlex8Cb, useFlex14Cb, useFlex15Cb, useNavBarCb, useLinksCb, useFlex6Cb, useFlex2Cb, useFlex3Cb, useFlex7Cb, useMenu1Cb, useFlex1Cb, useFlex16Cb, useFlex18Cb, useFlex17Cb, useFlex19Cb, useFlex39Cb, useFlex40Cb, useFlex41Cb, useFlex44Cb, useFlex42Cb, useFlex43Cb, useFlex47Cb, useFlex45Cb, useFlex46Cb, useFlex36Cb, useFlex48Cb, useFlex49Cb, useFlex50Cb, useFlex12Cb, useDiv1Cb, useFlex51Cb, useFlex52Cb, useFlex53Cb, useDiv15Cb, useDiv18Cb, useFlex54Cb, useFlex55Cb, useDiv76Cb, useDiv19Cb, useFlex57Cb, useFlex59Cb, useFlex62Cb, useFlex68Cb, useFlex69Cb, useFlex71Cb, useFlex70Cb, useFlex72Cb, useFlex73Cb, useFlex74Cb, useFlex75Cb, useFlex58Cb, useDiv23Cb, useDiv22Cb, useDiv20Cb, useFlex60Cb, useDiv25Cb, useFlex76Cb, useFlex77Cb, useFlex78Cb, useFlex79Cb, useFlex85Cb, useFlex89Cb, useFlex90Cb, useFlex92Cb, useFlex94Cb, useFlex97Cb, useFlex98Cb, useFlex102Cb, useFlex100Cb, useFlex101Cb, useFlex105Cb, useFlex103Cb, useFlex104Cb, useFlex99Cb, useFlex121Cb, useFlex119Cb, useFlex120Cb, useFlex118Cb, useFlex114Cb, useFlex115Cb, useFlex122Cb, useFlex126Cb, useFlex123Cb, useFlex124Cb, useFlex125Cb, useFlex130Cb, useFlex127Cb, useFlex128Cb, useFlex129Cb, useFlex95Cb, useFlex116Cb, useFlex110Cb, useFlex111Cb, useFlex117Cb, useFlex112Cb, useFlex113Cb, useFlex137Cb, useFlex138Cb, useFlex141Cb, useFlex140Cb, useFlex143Cb, useFlex144Cb, useImage5Cb, useFlex133Cb, useFlex134Cb, useImage_BlockCb, useFirst_Block_TextCb, useTextBox17Cb, useTextBox18Cb, useTextBox19Cb, useTextBox20Cb, useDownload_CVCb, useBook_a_CallCb, useDiv27Cb, useDiv28Cb, useDiv31Cb, useDiv10Cb, useDiv12Cb, useDiv13Cb, useDiv14Cb, useTextBox21Cb, useTextBox11Cb, useTextBox13Cb, useTextBox14Cb, useTextBox5Cb, useTextBox6Cb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useTextBox10Cb, useImage2Cb, useTextBox1Cb, useTextBox2Cb, useTextBox3Cb, useTextBox4Cb, useTextBox22Cb, useTextBox23Cb, useTextBox24Cb, useTextBox48Cb, useDiv8Cb, useTextBox49Cb, useTextBox50Cb, useTextBox51Cb, useTextBox52Cb, useTextBox53Cb, useTextBox54Cb, useTextBox61Cb, useDiv6Cb, useTextBox55Cb, useTextBox56Cb, useTextBox57Cb, useTextBox58Cb, useTextBox59Cb, useTextBox60Cb, useTextBox68Cb, useDiv9Cb, useTextBox62Cb, useTextBox63Cb, useTextBox64Cb, useTextBox65Cb, useTextBox66Cb, useTextBox67Cb, useTextBox69Cb, useTextBox70Cb, useTextBox71Cb, useButton3Cb, useImage1Cb, useFirst_Block_ImageCb, useImage11Cb, useImage12Cb, useImage13Cb, useUpload1Cb, useUpload2Cb, useUpload3Cb, useCarousel1Cb, useCarousel9Cb, useCarousel10Cb, useCarousel11Cb, useCarousel12Cb, useTextBox73Cb, useImage4Cb, useImage6Cb, useImage7Cb, useButton4Cb, useexperiment_buttonCb, useCascader1Cb, useDropdown1Cb, useCarousel13Cb, useDiv24Cb, useTextBox75Cb, useTextBox77Cb, useTextBox78Cb, useButton6Cb, useTextBox79Cb, useTextBox80Cb, useTextBox81Cb, useTextBox82Cb, useDiv26Cb, useDiv30Cb, useFlex63Cb, useDiv40Cb, useDiv41Cb, useTextBox99Cb, useTextBox100Cb, useTextBox101Cb, useTextBox102Cb, useDiv42Cb, useDiv43Cb, useTextBox103Cb, useTextBox104Cb, useTextBox105Cb, useTextBox106Cb, useDiv46Cb, useDiv47Cb, useTextBox111Cb, useTextBox112Cb, useTextBox113Cb, useTextBox114Cb, useDiv44Cb, useDiv45Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useTextBox110Cb, useDiv48Cb, useDiv49Cb, useTextBox115Cb, useTextBox116Cb, useTextBox117Cb, useTextBox118Cb, useTextBox135Cb, useDiv50Cb, useDiv51Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useTextBox122Cb, useDiv52Cb, useDiv53Cb, useTextBox123Cb, useTextBox124Cb, useTextBox125Cb, useTextBox126Cb, useDiv54Cb, useDiv55Cb, useTextBox127Cb, useTextBox128Cb, useTextBox129Cb, useTextBox130Cb, useDiv21Cb, useFlex61Cb, useTextBox131Cb, useTextBox132Cb, useTextBox133Cb, useDiv58Cb, useDiv59Cb, useTextBox136Cb, useTextBox137Cb, useTextBox138Cb, useTextBox139Cb, useTextBox140Cb, useFlex80Cb, useFlex84Cb, useDiv70Cb, useFlex87Cb, useFlex88Cb, useFlex91Cb, useTextBox141Cb, useTextBox142Cb, useTextBox143Cb, useTextBox144Cb, useDiv60Cb, useDiv62Cb, useTextBox146Cb, useTextBox147Cb, useTextBox148Cb, useDiv63Cb, useTextBox149Cb, useTextBox150Cb, useTextBox151Cb, useDiv61Cb, useTextBox145Cb, useTextBox166Cb, useTextBox165Cb, useDiv69Cb, useDiv68Cb, useTextBox162Cb, useTextBox163Cb, useTextBox164Cb, useDiv71Cb, useDiv72Cb, useTextBox167Cb, useTextBox168Cb, useTextBox169Cb, useDiv73Cb, useDiv74Cb, useTextBox170Cb, useTextBox171Cb, useTextBox172Cb, useDiv75Cb, useFlex96Cb, useTextBox156Cb, useTextBox157Cb, useTextBox158Cb, useDiv66Cb, useTextBox159Cb, useTextBox160Cb, useTextBox161Cb, useDiv67Cb, useCarousel14Cb, useModal1Cb, useTestimonial2Cb, useTextBox173Cb, useTextBox174Cb, useAccordion1Cb, useAccordion2Cb, useAccordion3Cb, useAccordion4Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const First_BlockProps = useStore((state)=>state["Home"]["First_Block"]);
const First_BlockIoProps = useIoStore((state)=>state["Home"]["First_Block"]);
const First_BlockCb = useFirst_BlockCb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Butoon_BoxProps = useStore((state)=>state["Home"]["Butoon_Box"]);
const Butoon_BoxIoProps = useIoStore((state)=>state["Home"]["Butoon_Box"]);
const Butoon_BoxCb = useButoon_BoxCb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const NavBarProps = useStore((state)=>state["Home"]["NavBar"]);
const NavBarIoProps = useIoStore((state)=>state["Home"]["NavBar"]);
const NavBarCb = useNavBarCb()
const LinksProps = useStore((state)=>state["Home"]["Links"]);
const LinksIoProps = useIoStore((state)=>state["Home"]["Links"]);
const LinksCb = useLinksCb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Menu1Props = useStore((state)=>state["Home"]["Menu1"]);
const Menu1IoProps = useIoStore((state)=>state["Home"]["Menu1"]);
const Menu1Cb = useMenu1Cb()
const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Div1Props = useStore((state)=>state["Home"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["Home"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Div76Props = useStore((state)=>state["Home"]["Div76"]);
const Div76IoProps = useIoStore((state)=>state["Home"]["Div76"]);
const Div76Cb = useDiv76Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Div23Props = useStore((state)=>state["Home"]["Div23"]);
const Div23IoProps = useIoStore((state)=>state["Home"]["Div23"]);
const Div23Cb = useDiv23Cb()
const Div22Props = useStore((state)=>state["Home"]["Div22"]);
const Div22IoProps = useIoStore((state)=>state["Home"]["Div22"]);
const Div22Cb = useDiv22Cb()
const Div20Props = useStore((state)=>state["Home"]["Div20"]);
const Div20IoProps = useIoStore((state)=>state["Home"]["Div20"]);
const Div20Cb = useDiv20Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Div25Props = useStore((state)=>state["Home"]["Div25"]);
const Div25IoProps = useIoStore((state)=>state["Home"]["Div25"]);
const Div25Cb = useDiv25Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex79Props = useStore((state)=>state["Home"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Home"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Flex111Props = useStore((state)=>state["Home"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Home"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex137Props = useStore((state)=>state["Home"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Home"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex138Props = useStore((state)=>state["Home"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Home"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex141Props = useStore((state)=>state["Home"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["Home"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex140Props = useStore((state)=>state["Home"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Home"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex143Props = useStore((state)=>state["Home"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["Home"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Flex144Props = useStore((state)=>state["Home"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["Home"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Image_BlockProps = useStore((state)=>state["Home"]["Image_Block"]);
const Image_BlockIoProps = useIoStore((state)=>state["Home"]["Image_Block"]);
const Image_BlockCb = useImage_BlockCb()
const First_Block_TextProps = useStore((state)=>state["Home"]["First_Block_Text"]);
const First_Block_TextIoProps = useIoStore((state)=>state["Home"]["First_Block_Text"]);
const First_Block_TextCb = useFirst_Block_TextCb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Download_CVProps = useStore((state)=>state["Home"]["Download_CV"]);
const Download_CVIoProps = useIoStore((state)=>state["Home"]["Download_CV"]);
const Download_CVCb = useDownload_CVCb()
const Book_a_CallProps = useStore((state)=>state["Home"]["Book_a_Call"]);
const Book_a_CallIoProps = useIoStore((state)=>state["Home"]["Book_a_Call"]);
const Book_a_CallCb = useBook_a_CallCb()
const Div27Props = useStore((state)=>state["Home"]["Div27"]);
const Div27IoProps = useIoStore((state)=>state["Home"]["Div27"]);
const Div27Cb = useDiv27Cb()
const Div28Props = useStore((state)=>state["Home"]["Div28"]);
const Div28IoProps = useIoStore((state)=>state["Home"]["Div28"]);
const Div28Cb = useDiv28Cb()
const Div31Props = useStore((state)=>state["Home"]["Div31"]);
const Div31IoProps = useIoStore((state)=>state["Home"]["Div31"]);
const Div31Cb = useDiv31Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Div14Props = useStore((state)=>state["Home"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Home"]["Div14"]);
const Div14Cb = useDiv14Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const First_Block_ImageProps = useStore((state)=>state["Home"]["First_Block_Image"]);
const First_Block_ImageIoProps = useIoStore((state)=>state["Home"]["First_Block_Image"]);
const First_Block_ImageCb = useFirst_Block_ImageCb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Upload1Props = useStore((state)=>state["Home"]["Upload1"]);
const Upload1IoProps = useIoStore((state)=>state["Home"]["Upload1"]);
const Upload1Cb = useUpload1Cb()
const Upload2Props = useStore((state)=>state["Home"]["Upload2"]);
const Upload2IoProps = useIoStore((state)=>state["Home"]["Upload2"]);
const Upload2Cb = useUpload2Cb()
const Upload3Props = useStore((state)=>state["Home"]["Upload3"]);
const Upload3IoProps = useIoStore((state)=>state["Home"]["Upload3"]);
const Upload3Cb = useUpload3Cb()
const Carousel1Props = useStore((state)=>state["Home"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["Home"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const Carousel9Props = useStore((state)=>state["Home"]["Carousel9"]);
const Carousel9IoProps = useIoStore((state)=>state["Home"]["Carousel9"]);
const Carousel9Cb = useCarousel9Cb()
const Carousel10Props = useStore((state)=>state["Home"]["Carousel10"]);
const Carousel10IoProps = useIoStore((state)=>state["Home"]["Carousel10"]);
const Carousel10Cb = useCarousel10Cb()
const Carousel11Props = useStore((state)=>state["Home"]["Carousel11"]);
const Carousel11IoProps = useIoStore((state)=>state["Home"]["Carousel11"]);
const Carousel11Cb = useCarousel11Cb()
const Carousel12Props = useStore((state)=>state["Home"]["Carousel12"]);
const Carousel12IoProps = useIoStore((state)=>state["Home"]["Carousel12"]);
const Carousel12Cb = useCarousel12Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const experiment_buttonProps = useStore((state)=>state["Home"]["experiment_button"]);
const experiment_buttonIoProps = useIoStore((state)=>state["Home"]["experiment_button"]);
const experiment_buttonCb = useexperiment_buttonCb()
const Cascader1Props = useStore((state)=>state["Home"]["Cascader1"]);
const Cascader1IoProps = useIoStore((state)=>state["Home"]["Cascader1"]);
const Cascader1Cb = useCascader1Cb()
const Dropdown1Props = useStore((state)=>state["Home"]["Dropdown1"]);
const Dropdown1IoProps = useIoStore((state)=>state["Home"]["Dropdown1"]);
const Dropdown1Cb = useDropdown1Cb()
const Carousel13Props = useStore((state)=>state["Home"]["Carousel13"]);
const Carousel13IoProps = useIoStore((state)=>state["Home"]["Carousel13"]);
const Carousel13Cb = useCarousel13Cb()
const Div24Props = useStore((state)=>state["Home"]["Div24"]);
const Div24IoProps = useIoStore((state)=>state["Home"]["Div24"]);
const Div24Cb = useDiv24Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const Div26Props = useStore((state)=>state["Home"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["Home"]["Div26"]);
const Div26Cb = useDiv26Cb()
const Div30Props = useStore((state)=>state["Home"]["Div30"]);
const Div30IoProps = useIoStore((state)=>state["Home"]["Div30"]);
const Div30Cb = useDiv30Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Div40Props = useStore((state)=>state["Home"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Home"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Div41Props = useStore((state)=>state["Home"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["Home"]["Div41"]);
const Div41Cb = useDiv41Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const Div42Props = useStore((state)=>state["Home"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["Home"]["Div42"]);
const Div42Cb = useDiv42Cb()
const Div43Props = useStore((state)=>state["Home"]["Div43"]);
const Div43IoProps = useIoStore((state)=>state["Home"]["Div43"]);
const Div43Cb = useDiv43Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const Div46Props = useStore((state)=>state["Home"]["Div46"]);
const Div46IoProps = useIoStore((state)=>state["Home"]["Div46"]);
const Div46Cb = useDiv46Cb()
const Div47Props = useStore((state)=>state["Home"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["Home"]["Div47"]);
const Div47Cb = useDiv47Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const Div44Props = useStore((state)=>state["Home"]["Div44"]);
const Div44IoProps = useIoStore((state)=>state["Home"]["Div44"]);
const Div44Cb = useDiv44Cb()
const Div45Props = useStore((state)=>state["Home"]["Div45"]);
const Div45IoProps = useIoStore((state)=>state["Home"]["Div45"]);
const Div45Cb = useDiv45Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Div48Props = useStore((state)=>state["Home"]["Div48"]);
const Div48IoProps = useIoStore((state)=>state["Home"]["Div48"]);
const Div48Cb = useDiv48Cb()
const Div49Props = useStore((state)=>state["Home"]["Div49"]);
const Div49IoProps = useIoStore((state)=>state["Home"]["Div49"]);
const Div49Cb = useDiv49Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const Div50Props = useStore((state)=>state["Home"]["Div50"]);
const Div50IoProps = useIoStore((state)=>state["Home"]["Div50"]);
const Div50Cb = useDiv50Cb()
const Div51Props = useStore((state)=>state["Home"]["Div51"]);
const Div51IoProps = useIoStore((state)=>state["Home"]["Div51"]);
const Div51Cb = useDiv51Cb()
const TextBox119Props = useStore((state)=>state["Home"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const Div52Props = useStore((state)=>state["Home"]["Div52"]);
const Div52IoProps = useIoStore((state)=>state["Home"]["Div52"]);
const Div52Cb = useDiv52Cb()
const Div53Props = useStore((state)=>state["Home"]["Div53"]);
const Div53IoProps = useIoStore((state)=>state["Home"]["Div53"]);
const Div53Cb = useDiv53Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const Div54Props = useStore((state)=>state["Home"]["Div54"]);
const Div54IoProps = useIoStore((state)=>state["Home"]["Div54"]);
const Div54Cb = useDiv54Cb()
const Div55Props = useStore((state)=>state["Home"]["Div55"]);
const Div55IoProps = useIoStore((state)=>state["Home"]["Div55"]);
const Div55Cb = useDiv55Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const Div21Props = useStore((state)=>state["Home"]["Div21"]);
const Div21IoProps = useIoStore((state)=>state["Home"]["Div21"]);
const Div21Cb = useDiv21Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const Div58Props = useStore((state)=>state["Home"]["Div58"]);
const Div58IoProps = useIoStore((state)=>state["Home"]["Div58"]);
const Div58Cb = useDiv58Cb()
const Div59Props = useStore((state)=>state["Home"]["Div59"]);
const Div59IoProps = useIoStore((state)=>state["Home"]["Div59"]);
const Div59Cb = useDiv59Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox137Props = useStore((state)=>state["Home"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["Home"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const Flex80Props = useStore((state)=>state["Home"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Home"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Div70Props = useStore((state)=>state["Home"]["Div70"]);
const Div70IoProps = useIoStore((state)=>state["Home"]["Div70"]);
const Div70Cb = useDiv70Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Flex91Props = useStore((state)=>state["Home"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Home"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox142Props = useStore((state)=>state["Home"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Home"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const TextBox143Props = useStore((state)=>state["Home"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["Home"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["Home"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["Home"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const Div60Props = useStore((state)=>state["Home"]["Div60"]);
const Div60IoProps = useIoStore((state)=>state["Home"]["Div60"]);
const Div60Cb = useDiv60Cb()
const Div62Props = useStore((state)=>state["Home"]["Div62"]);
const Div62IoProps = useIoStore((state)=>state["Home"]["Div62"]);
const Div62Cb = useDiv62Cb()
const TextBox146Props = useStore((state)=>state["Home"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Home"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const TextBox147Props = useStore((state)=>state["Home"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Home"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox148Props = useStore((state)=>state["Home"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Home"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const Div63Props = useStore((state)=>state["Home"]["Div63"]);
const Div63IoProps = useIoStore((state)=>state["Home"]["Div63"]);
const Div63Cb = useDiv63Cb()
const TextBox149Props = useStore((state)=>state["Home"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Home"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["Home"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["Home"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const TextBox151Props = useStore((state)=>state["Home"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["Home"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const Div61Props = useStore((state)=>state["Home"]["Div61"]);
const Div61IoProps = useIoStore((state)=>state["Home"]["Div61"]);
const Div61Cb = useDiv61Cb()
const TextBox145Props = useStore((state)=>state["Home"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["Home"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const TextBox166Props = useStore((state)=>state["Home"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Home"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox165Props = useStore((state)=>state["Home"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["Home"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const Div69Props = useStore((state)=>state["Home"]["Div69"]);
const Div69IoProps = useIoStore((state)=>state["Home"]["Div69"]);
const Div69Cb = useDiv69Cb()
const Div68Props = useStore((state)=>state["Home"]["Div68"]);
const Div68IoProps = useIoStore((state)=>state["Home"]["Div68"]);
const Div68Cb = useDiv68Cb()
const TextBox162Props = useStore((state)=>state["Home"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["Home"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Home"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const TextBox164Props = useStore((state)=>state["Home"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["Home"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const Div71Props = useStore((state)=>state["Home"]["Div71"]);
const Div71IoProps = useIoStore((state)=>state["Home"]["Div71"]);
const Div71Cb = useDiv71Cb()
const Div72Props = useStore((state)=>state["Home"]["Div72"]);
const Div72IoProps = useIoStore((state)=>state["Home"]["Div72"]);
const Div72Cb = useDiv72Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const Div73Props = useStore((state)=>state["Home"]["Div73"]);
const Div73IoProps = useIoStore((state)=>state["Home"]["Div73"]);
const Div73Cb = useDiv73Cb()
const Div74Props = useStore((state)=>state["Home"]["Div74"]);
const Div74IoProps = useIoStore((state)=>state["Home"]["Div74"]);
const Div74Cb = useDiv74Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const Div75Props = useStore((state)=>state["Home"]["Div75"]);
const Div75IoProps = useIoStore((state)=>state["Home"]["Div75"]);
const Div75Cb = useDiv75Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const TextBox156Props = useStore((state)=>state["Home"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Home"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["Home"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Home"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["Home"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Home"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const Div66Props = useStore((state)=>state["Home"]["Div66"]);
const Div66IoProps = useIoStore((state)=>state["Home"]["Div66"]);
const Div66Cb = useDiv66Cb()
const TextBox159Props = useStore((state)=>state["Home"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Home"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox160Props = useStore((state)=>state["Home"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Home"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const Div67Props = useStore((state)=>state["Home"]["Div67"]);
const Div67IoProps = useIoStore((state)=>state["Home"]["Div67"]);
const Div67Cb = useDiv67Cb()
const Carousel14Props = useStore((state)=>state["Home"]["Carousel14"]);
const Carousel14IoProps = useIoStore((state)=>state["Home"]["Carousel14"]);
const Carousel14Cb = useCarousel14Cb()
const Modal1Props = useStore((state)=>state["Home"]["Modal1"]);
const Modal1IoProps = useIoStore((state)=>state["Home"]["Modal1"]);
const Modal1Cb = useModal1Cb()
const Testimonial2Props = useStore((state)=>state["Home"]["Testimonial2"]);
const Testimonial2IoProps = useIoStore((state)=>state["Home"]["Testimonial2"]);
const Testimonial2Cb = useTestimonial2Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const Accordion1Props = useStore((state)=>state["Home"]["Accordion1"]);
const Accordion1IoProps = useIoStore((state)=>state["Home"]["Accordion1"]);
const Accordion1Cb = useAccordion1Cb()
const Accordion2Props = useStore((state)=>state["Home"]["Accordion2"]);
const Accordion2IoProps = useIoStore((state)=>state["Home"]["Accordion2"]);
const Accordion2Cb = useAccordion2Cb()
const Accordion3Props = useStore((state)=>state["Home"]["Accordion3"]);
const Accordion3IoProps = useIoStore((state)=>state["Home"]["Accordion3"]);
const Accordion3Cb = useAccordion3Cb()
const Accordion4Props = useStore((state)=>state["Home"]["Accordion4"]);
const Accordion4IoProps = useIoStore((state)=>state["Home"]["Accordion4"]);
const Accordion4Cb = useAccordion4Cb()

  return (<>
  <Flex className="p-Home NavBar bpt" {...NavBarProps} {...NavBarCb} {...NavBarIoProps}>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<Flex className="p-Home Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Flex className="p-Home Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
</Flex>
<Flex className="p-Home Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<Flex className="p-Home Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Menu className="p-Home Menu1 bpt" {...Menu1Props} {...Menu1Cb} {...Menu1IoProps}>
<Flex className="p-Home Flex1 bpt" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<TextBox className="p-Home TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox className="p-Home TextBox1 bpt" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
</Flex>
</Menu>
</Flex>
<Flex className="p-Home Links bpt" {...LinksProps} {...LinksCb} {...LinksIoProps}>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<TextBox className="p-Home TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home First_Block bpt" {...First_BlockProps} {...First_BlockCb} {...First_BlockIoProps}>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<TextBox className="p-Home First_Block_Text bpt" {...First_Block_TextProps} {...First_Block_TextCb} {...First_Block_TextIoProps}/>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<Flex className="p-Home Butoon_Box bpt" {...Butoon_BoxProps} {...Butoon_BoxCb} {...Butoon_BoxIoProps}>
<Button className="p-Home Book_a_Call bpt" {...Book_a_CallProps} {...Book_a_CallCb} {...Book_a_CallIoProps}/>
<Button className="p-Home Download_CV bpt" {...Download_CVProps} {...Download_CVCb} {...Download_CVIoProps}/>
<Div className="p-Home Div27 bpt" {...Div27Props} {...Div27Cb} {...Div27IoProps}/>
<Div className="p-Home Div31 bpt" {...Div31Props} {...Div31Cb} {...Div31IoProps}/>
<Div className="p-Home Div28 bpt" {...Div28Props} {...Div28Cb} {...Div28IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Image_Block bpt" {...Image_BlockProps} {...Image_BlockCb} {...Image_BlockIoProps}/>
</Flex>
<Flex className="p-Home Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Flex>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}/>
<Div className="p-Home Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}/>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}/>
<Div className="p-Home Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
<Div className="p-Home Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Div>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Div className="p-Home Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}/>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Flex>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}/>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Flex>
<Flex className="p-Home Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}/>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
</Flex>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Flex>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Div className="p-Home Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<Upload className="p-Home Upload1 bpt" {...Upload1Props} {...Upload1Cb} {...Upload1IoProps}/>
<Upload className="p-Home Upload2 bpt" {...Upload2Props} {...Upload2Cb} {...Upload2IoProps}/>
<Upload className="p-Home Upload3 bpt" {...Upload3Props} {...Upload3Cb} {...Upload3IoProps}/>
</Div>
</Flex>
<Image className="p-Home First_Block_Image bpt" {...First_Block_ImageProps} {...First_Block_ImageCb} {...First_Block_ImageIoProps}/>
</Flex>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Flex>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Carousel className="p-Home Carousel1 bpt" {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
<Carousel className="p-Home Carousel12 bpt" {...Carousel12Props} {...Carousel12Cb} {...Carousel12IoProps}/>
<Carousel className="p-Home Carousel11 bpt" {...Carousel11Props} {...Carousel11Cb} {...Carousel11IoProps}/>
<Carousel className="p-Home Carousel10 bpt" {...Carousel10Props} {...Carousel10Cb} {...Carousel10IoProps}/>
<Carousel className="p-Home Carousel9 bpt" {...Carousel9Props} {...Carousel9Cb} {...Carousel9IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Carousel className="p-Home Carousel13 bpt" {...Carousel13Props} {...Carousel13Cb} {...Carousel13IoProps}/>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Flex>
<Div className="p-Home Div24 bpt" {...Div24Props} {...Div24Cb} {...Div24IoProps}/>
<Div className="p-Home Div76 bpt" {...Div76Props} {...Div76Cb} {...Div76IoProps}>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
</Div>
</Flex>
<Div className="p-Home Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Div className="p-Home Div23 bpt" {...Div23Props} {...Div23Cb} {...Div23IoProps}>
<Div className="p-Home Div22 bpt" {...Div22Props} {...Div22Cb} {...Div22IoProps}>
<Div className="p-Home Div20 bpt" {...Div20Props} {...Div20Cb} {...Div20IoProps}>
<Div className="p-Home Div21 bpt" {...Div21Props} {...Div21Cb} {...Div21IoProps}/>
</Div>
</Div>
</Div>
</Flex>
<Div className="p-Home Div25 bpt" {...Div25Props} {...Div25Cb} {...Div25IoProps}>
<TextBox className="p-Home TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<Div className="p-Home Div58 bpt" {...Div58Props} {...Div58Cb} {...Div58IoProps}/>
<Div className="p-Home Div59 bpt" {...Div59Props} {...Div59Cb} {...Div59IoProps}/>
</Div>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}/>
</Flex>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
<Div className="p-Home Div26 bpt" {...Div26Props} {...Div26Cb} {...Div26IoProps}/>
<Div className="p-Home Div30 bpt" {...Div30Props} {...Div30Cb} {...Div30IoProps}/>
</Flex>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}/>
</Flex>
<Flex className="p-Home Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<Div className="p-Home Div41 bpt" {...Div41Props} {...Div41Cb} {...Div41IoProps}/>
<Div className="p-Home Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}/>
</Flex>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<Div className="p-Home Div43 bpt" {...Div43Props} {...Div43Cb} {...Div43IoProps}/>
<Div className="p-Home Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}/>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<Div className="p-Home Div47 bpt" {...Div47Props} {...Div47Cb} {...Div47IoProps}/>
<Div className="p-Home Div46 bpt" {...Div46Props} {...Div46Cb} {...Div46IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<Div className="p-Home Div45 bpt" {...Div45Props} {...Div45Cb} {...Div45IoProps}/>
<Div className="p-Home Div44 bpt" {...Div44Props} {...Div44Cb} {...Div44IoProps}/>
</Flex>
<Flex className="p-Home Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<Div className="p-Home Div49 bpt" {...Div49Props} {...Div49Cb} {...Div49IoProps}/>
<Div className="p-Home Div48 bpt" {...Div48Props} {...Div48Cb} {...Div48IoProps}/>
</Flex>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<TextBox className="p-Home TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
<Div className="p-Home Div51 bpt" {...Div51Props} {...Div51Cb} {...Div51IoProps}/>
<Div className="p-Home Div50 bpt" {...Div50Props} {...Div50Cb} {...Div50IoProps}/>
</Flex>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<Div className="p-Home Div53 bpt" {...Div53Props} {...Div53Cb} {...Div53IoProps}/>
<Div className="p-Home Div52 bpt" {...Div52Props} {...Div52Cb} {...Div52IoProps}/>
</Flex>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
<Div className="p-Home Div55 bpt" {...Div55Props} {...Div55Cb} {...Div55IoProps}/>
<Div className="p-Home Div54 bpt" {...Div54Props} {...Div54Cb} {...Div54IoProps}/>
</Flex>
</Flex>
</Div>
<Flex className="p-Home Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox className="p-Home TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
</Flex>
<Flex className="p-Home Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<TextBox className="p-Home TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Flex className="p-Home Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}/>
<Flex className="p-Home Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}/>
<Div className="p-Home Div70 bpt" {...Div70Props} {...Div70Cb} {...Div70IoProps}/>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}/>
<Flex className="p-Home Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}/>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Div className="p-Home Div61 bpt" {...Div61Props} {...Div61Cb} {...Div61IoProps}/>
<TextBox className="p-Home TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
</Flex>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<Flex className="p-Home Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<TextBox className="p-Home TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<TextBox className="p-Home TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
</Flex>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Div className="p-Home Div60 bpt" {...Div60Props} {...Div60Cb} {...Div60IoProps}/>
<TextBox className="p-Home TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Flex className="p-Home Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<TextBox className="p-Home TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
<TextBox className="p-Home TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
</Flex>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<Div className="p-Home Div62 bpt" {...Div62Props} {...Div62Cb} {...Div62IoProps}/>
<TextBox className="p-Home TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<TextBox className="p-Home TextBox151 bpt" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
<TextBox className="p-Home TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
</Flex>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<Div className="p-Home Div63 bpt" {...Div63Props} {...Div63Cb} {...Div63IoProps}/>
<TextBox className="p-Home TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Div className="p-Home Div69 bpt" {...Div69Props} {...Div69Cb} {...Div69IoProps}/>
<TextBox className="p-Home TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
</Flex>
<TextBox className="p-Home TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<Div className="p-Home Div71 bpt" {...Div71Props} {...Div71Cb} {...Div71IoProps}/>
</Flex>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<TextBox className="p-Home TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
<TextBox className="p-Home TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Flex>
<Flex className="p-Home Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<Div className="p-Home Div68 bpt" {...Div68Props} {...Div68Cb} {...Div68IoProps}/>
<TextBox className="p-Home TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Div className="p-Home Div72 bpt" {...Div72Props} {...Div72Cb} {...Div72IoProps}/>
</Flex>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<TextBox className="p-Home TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<TextBox className="p-Home TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
</Flex>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Div className="p-Home Div73 bpt" {...Div73Props} {...Div73Cb} {...Div73IoProps}/>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<Div className="p-Home Div74 bpt" {...Div74Props} {...Div74Cb} {...Div74IoProps}/>
</Flex>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Flex>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Div className="p-Home Div75 bpt" {...Div75Props} {...Div75Cb} {...Div75IoProps}/>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}/>
</Flex>
<Flex className="p-Home Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Testimonial className="p-Home Testimonial2 bpt" {...Testimonial2Props} {...Testimonial2Cb} {...Testimonial2IoProps}/>
</Flex>
<Flex className="p-Home Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<Flex className="p-Home Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Flex>
<Flex className="p-Home Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<Flex className="p-Home Flex144 bpt" {...Flex144Props} {...Flex144Cb} {...Flex144IoProps}>
<Accordion className="p-Home Accordion1 bpt" {...Accordion1Props} {...Accordion1Cb} {...Accordion1IoProps}/>
<Accordion className="p-Home Accordion2 bpt" {...Accordion2Props} {...Accordion2Cb} {...Accordion2IoProps}/>
<Accordion className="p-Home Accordion3 bpt" {...Accordion3Props} {...Accordion3Cb} {...Accordion3IoProps}/>
<Accordion className="p-Home Accordion4 bpt" {...Accordion4Props} {...Accordion4Cb} {...Accordion4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Modal className="p-Home Modal1 bpt" {...Modal1Props} {...Modal1Cb} {...Modal1IoProps}/>
<Carousel className="p-Home Carousel14 bpt" {...Carousel14Props} {...Carousel14Cb} {...Carousel14IoProps}/>
</Flex>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}/>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}/>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<TextBox className="p-Home TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
<TextBox className="p-Home TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
</Flex>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<Div className="p-Home Div67 bpt" {...Div67Props} {...Div67Cb} {...Div67IoProps}/>
<TextBox className="p-Home TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<TextBox className="p-Home TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<TextBox className="p-Home TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
</Flex>
<Flex className="p-Home Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<Div className="p-Home Div66 bpt" {...Div66Props} {...Div66Cb} {...Div66IoProps}/>
<TextBox className="p-Home TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<Dropdown className="p-Home Dropdown1 bpt" {...Dropdown1Props} {...Dropdown1Cb} {...Dropdown1IoProps}/>
<Cascader className="p-Home Cascader1 bpt" {...Cascader1Props} {...Cascader1Cb} {...Cascader1IoProps}/>
<Button className="p-Home experiment_button bpt" {...experiment_buttonProps} {...experiment_buttonCb} {...experiment_buttonIoProps}/>
</Div>
  </>);
}
