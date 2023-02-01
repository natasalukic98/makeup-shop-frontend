import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8081/',
                realm: 'makeupRealm',
                clientId: 'makeup'
            },
            initOptions: {
                onLoad: 'check-sso'
            },
            loadUserProfileAtStartUp: true,
        }
        );
}