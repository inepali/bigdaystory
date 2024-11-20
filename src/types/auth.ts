type ProviderData = {
  providerId: string;
  uid: string;
  displayName: string;
  email: string;
  phoneNumber: string | null;
  photoURL: string;
};

type StsTokenManager = {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
};

type User = {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  isAnonymous: boolean;
  photoURL: string;
  providerData: ProviderData[];
  stsTokenManager: StsTokenManager;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
};

type ProactiveRefresh = {
  user: User;
  isRunning: boolean;
  timerId: number | null;
  errorBackoff: number;
};

type ProviderUserInfo = {
  providerId: string;
  displayName: string;
  photoUrl: string;
  federatedId: string;
  email: string;
  rawId: string;
};

type ReloadUserInfo = {
  localId: string;
  email: string;
  displayName: string;
  photoUrl: string;
  emailVerified: boolean;
  providerUserInfo: ProviderUserInfo[];
  validSince: string;
  lastLoginAt: string;
  createdAt: string;
  lastRefreshAt: string;
};

type Auth = {
  apiKey: string;
  authDomain: string;
  appName: string;
  currentUser: User;
};

export type UserType = {
  providerId: string;
  proactiveRefresh: ProactiveRefresh;
  reloadUserInfo: ReloadUserInfo;
  reloadListener: any;
  uid: string;
  auth: Auth;
  stsTokenManager: StsTokenManager;
  accessToken: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: any;
  photoURL: string;
  isAnonymous: boolean;
  tenantId: any;
  providerData: ProviderData[];
  metadata: {
    createdAt: string;
    lastLoginAt: string;
  };
};

export type AuthContextType = {
  currentUser: UserType | null;
  isLogged: boolean;
  loading: boolean;
};
