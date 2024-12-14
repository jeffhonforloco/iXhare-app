import { UIResponder, UIApplicationDelegate } from 'react-native';

export default class AppDelegate extends UIResponder implements UIApplicationDelegate {
  application(application: any, didFinishLaunchingWithOptions: any): boolean {
    return true;
  }

  applicationWillTerminate(application: any): void {
    // Clean up any resources
  }

  applicationDidBecomeActive(application: any): void {
    // App became active
  }

  applicationWillResignActive(application: any): void {
    // App will become inactive
  }
}