import { environment } from "src/environments/environment";

export const ApiConstant = {
    apiUrl: `${environment.baseUrl}`,
}
interface ApplicationPathsType {
    readonly Landing: string;
    readonly LandingPathComponents: string[];
  }
  let applicationPaths: ApplicationPathsType = {
    Landing: 'landing',
    LandingPathComponents: [],
  };
  applicationPaths = {
    ...applicationPaths,
    LandingPathComponents: applicationPaths.Landing.split('/'),
  };
  
  export const ApplicationPaths: ApplicationPathsType = applicationPaths;