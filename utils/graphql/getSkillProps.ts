import gql from "graphql-tag";
import { normalizeTech } from '../normalizeTech';
import { client } from '../../client/client';

export const getSkillProps = async () => {
  try {
    const data = await client.query({
      query: gql`query{
        allTechs(sortBy:priority_ASC) {
          edges {
            node {
              label
              icon
              priority
              column
              description
              projects {
                project {
                  ... on Projectsnippet {
                    title
                    size
                    path
                    snippet
                  }
                }
              }
            }
          }
        }
      }`
    })
    const normalizedTech = normalizeTech(data.data.allTechs.edges);
    // console.log(normalizedTech);
    return normalizedTech;
    
  } catch (error) {
    console.log(error);
  }
}