import { lazy } from "react";
import { Row, Col } from "antd";
import Zoom from "react-reveal/Zoom";
import { withTranslation } from "react-i18next";

import useForm from "./useForm";

import * as S from "./styles";

const Block = lazy(() => import("../Block"));
const Input = lazy(() => import("../../common/Input"));
const Button = lazy(() => import("../../common/Button"));
const TextArea = lazy(() => import("../../common/TextArea"));
const SvgIcon = lazy(() => import("../../common/SvgIcon"));

const Contact = ({ title, content, id, t }) => {
  const { values, errors, handleChange, handleSubmit } = useForm();


  return (
    <S.ContactContainer id={id}>
      <S.Contact style={{marginTop:"90px"}}>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Row type="flex" gutter={20} style={{paddingBottom: "50px"}}>
                <SvgIcon src="logo.svg" width="100" height="100" viewBox="0 0 100 100"/>
                <h1 style={{padding: "30px"}}>UnBlockMe</h1>
            </Row>
            <Block padding={true} title="Register" content="Provide your GithubId and enter the languages you are good at so you can be someone's mentor as well. Contributing in community is what makes us stronger together." />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="GithubId"
                  id="Github Id"
                  placeholder="Your Github Id"
                  value={values.name || ""}
                  onChange={handleChange}
                />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="proficientLanguages"
                  id="Proficient Languages"
                  placeholder="python, java, flutter"
                  value={values.email || ""}
                  onChange={handleChange}
                />
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  {t("Submit")}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default withTranslation()(Contact);
