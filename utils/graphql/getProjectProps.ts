import gql from "graphql-tag";
import { normalizeProject} from '../normalizeTech';
import { client } from '../../client/client';


export const getProjectProps = async () => {
  try {
    const data = await client.query({
      query: gql`query{
        allProjects{
          edges{
            node{
              slug
              name
              imageUrl:imageurl
              liveUrl:liveurl
              githubUrl: githuburl
              category
              status
              breadcrumbs {
                breadcrumb:techbreadcrumbs
              } 
              summary
            }
          }
        }
    }`
    })

    const normalizedProjects = normalizeProject(data.data.allProjects.edges);
    // return data
    return normalizedProjects;
  } catch (error) {
    console.log(error);
  }
}