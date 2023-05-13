import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, useSegments } from "expo-router";

export enum UserType {
    Moderator = "moderator",
    Coordinator = "coordinator",
    Director = "director",
    Customer = "customer",
}

export enum AppTarget {
    AppOne = "app-one",
    AppTwo = "app-two",
}

export type User = {
    firstName: string;
    lastName: string;
    userType: UserType;
    appTarget: AppTarget;
};

export type AuthContextProps = {
    signIn: (user: User) => void;
    signOut: () => void;
    user: User | null;
};

const AuthContext = createContext<AuthContextProps>(null!);

// This hook can be used to access the user info.
export const useAuth = () => useContext(AuthContext);

// This hook will protect the route access based on user authentication.
export const useProtectedRoute = (user: User | null) => {
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        const inAuthGroup = segments[0] === "(auth)";

        if (
            // If the user is not signed in and the initial segment is not anything in the auth group.
            !user &&
            !inAuthGroup
        ) {
            // Redirect to the sign-in page.
            router.replace("/app-one-auth");
        } else if (user && inAuthGroup) {
            if (user.appTarget === AppTarget.AppOne) {
                router.replace("/app-one/home");
                return;
            }

            if (user.appTarget === AppTarget.AppTwo) {
                router.replace("/app-two/home");
                return;
            }
        }
    }, [user, segments]);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);

    useProtectedRoute(user);

    return (
        <AuthContext.Provider
            value={{
                signIn: (user: User) => setUser(user),
                signOut: () => setUser(null),
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
