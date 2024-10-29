import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";
import octocat from '../../assets/octocat.png';
import { Container, Column, Title, TitleHighlight} from './styles';

const Feed = () => {
    return ( <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={80} nome="Heloisa Zen" imagem={octocat} />
           <UserInfo percentual={70} nome="Chrystian Oliveira" imagem="https://imgs.search.brave.com/jSyjakviY0d7VAGcWGRTLUhFiTD9MviZhx5KtGZy348/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vY3Rv/ZGV4LmdpdGh1Yi5j/b20vaW1hZ2VzL1Jv/Ym90b2NhdC5wbmc" />
           <UserInfo percentual={60} nome="Pablo Henrique" imagem="https://imgs.search.brave.com/dhJWi7R39Q9oqK-ojH5HJLdad_lHqDl8TO8tipLfUB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBhL2Rj/L2FkLzBhZGNhZDIw/ZjdmMjkzZWJmNjEx/ZTU0YzU4NTU5NTNh/LmpwZw" />
           <UserInfo percentual={50} nome="Guilherme dos Santos" imagem="https://imgs.search.brave.com/5FVCz-wb7PMX3wGKX5iKCjjp8MP1Qm00E7af280G6qc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9teW9j/dG9jYXQuY29tL2Fz/c2V0cy9pbWFnZXMv/b2N0b2NhdC1vdXRm/aXQucG5n" />
           <UserInfo percentual={40} nome="Sofia Silva" imagem="https://imgs.search.brave.com/B8IauA6RTZ0PXZZzmZXCjUt1ia1tmxenz1crSs85dhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vY3Rv/ZGV4LmdpdGh1Yi5j/b20vaW1hZ2VzL3R3/ZW50eS1wZXJjZW50/LWNvb2xlci1vY3Rv/Y2F0LnBuZw" />
           </Column>
        </Container>

    </>)
}

export { Feed }