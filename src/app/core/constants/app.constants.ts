import { environment } from "src/environments/environment";

export const EstateConstant = {
    estateUrl: `${environment.baseUrl}`,
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