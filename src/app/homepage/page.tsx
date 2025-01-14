
import ResponsiveAppBar from "@/components/Materialuinavbar";
import Materialuisignin from "@/components/Materialuisignin";
import Materialuifooter from "@/components/Materiualuifooter";
import MySwiper from "@/components/MySwiper";
import Navbarmenu from "@/components/Navbarmenu";
import Navbarmenu2 from "@/components/Navbarmenu2";
import { Col, Row } from "react-bootstrap";

export default function Page() {
    

    return (
        <>
        <Row>
            <Col>
             <ResponsiveAppBar />
            </Col>
        </Row>
        <Row>
            <MySwiper />
        </Row>
        <Row>
            <Materialuisignin />
        </Row>
        <Row>
            <Materialuifooter />
        </Row>
        
        </>

        
    )
}