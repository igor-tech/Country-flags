import {FC} from 'react';
import styled from 'styled-components'

const Wrapper = styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardListItem = styled.li``;

type PropsType = {
  img: string
  name: string
  info: Array<{title: string, description: string}>
  onClick: () => void
}

export const Card: FC<PropsType> = ({img, name, info, onClick}) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage>
        <img src={img} alt={'card-img'}/>
      </CardImage>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(el => (
            <CardListItem key={el.title}>
                <b>{el.title}: </b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

