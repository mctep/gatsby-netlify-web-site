import React from 'react';
import {PageProps, graphql} from 'gatsby';
import styled from 'styled-components';
import {Header, Layout} from '../components/layout';

const Avatar = styled.img`
    border-radius: 100%;
    width: 100px;
    height: 100px;
    border: 4px solid transparent;
`;

const Avatars = styled.div`
    display: flex;
`;

const Section = styled.section`
    padding: 0 24px;
`;

const PersonPage = styled.div<{selected: boolean}>`
    display: ${(props) => (props.selected ? 'flex' : 'none')};
`;

const PersonPhoto = styled.img`
    width: 460px;
`;

const PersonLabel = styled.label<{selected: boolean}>`
    ${Avatar} {
        border-color: ${(props) => (props.selected ? '#2fb984' : 'transparent')};
    }
`;

export default function CompanyRoute(props: PageProps<any>) {
    const persons = props.data.allMarkdownRemark.edges.map((edge: any) => edge.node);
    const [selectedPersonId, setSelectedPersonId] = React.useState(persons[0].id);

    return (
        <Layout>
            <Header>
                <h1>We are up for the challenge</h1>
                <p>
                    Our team of biologists, bioinformaticians and computer scientists leads the way
                    in developing the most efficient bioinformatics solutions fast-tracking your R&D
                    efforts.
                </p>
            </Header>
            <Section>
                <h1>People of Genestack</h1>
                <Avatars>
                    {persons.map((person: any) => (
                        <PersonLabel
                            key={person.id}
                            selected={selectedPersonId === person.id}
                            onClick={() => setSelectedPersonId(person.id)}
                        >
                            <Avatar src={person.frontmatter.avatar} />
                        </PersonLabel>
                    ))}
                </Avatars>
            </Section>
            <Section>
                {persons.map((person: any) => (
                    <PersonPage key={person.id} selected={selectedPersonId === person.id}>
                        <div>
                            <PersonPhoto src={person.frontmatter.photo} />
                        </div>
                        <Section>
                            {person.frontmatter.title}
                            <div dangerouslySetInnerHTML={{__html: person.html}} />
                        </Section>
                    </PersonPage>
                ))}
            </Section>
        </Layout>
    );
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {domain: {in: "People of Genestack"}}}) {
            edges {
                node {
                    id
                    frontmatter {
                        domain
                        avatar
                        photo
                        name
                        title
                    }
                    html
                }
            }
        }
    }
`;
