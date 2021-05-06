import { ContextBlock, Timeline } from "@/presentation/components";

import * as S from "./style";

const experiences = [
  {
    period: "2018 - 2019",
    company: "ETEC Lauro Gomes",
    office: "Técnico em Desenvolvimento de Sistemas",
    children: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
    hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet
    vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
    laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
    nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris
    non felis mollis faucibus.`,
  },
  {
    period: "2017 - 2018",
    company: "ETEC Lauro Gomes",
    office: "Técnico em Informatica para internet",
    children: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
    hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet
    vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
    laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
    nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris
    non felis mollis faucibus.`,
  },
];

const Education = () => {
  return (
    <S.Container id="education">
      <ContextBlock
        title="EDUCAÇÃO"
        subtitle="Estudei por ai rs."
        bg="primary"
      />
      <S.Content>
        <Timeline events={experiences} />
      </S.Content>
    </S.Container>
  );
};

export default Education;
