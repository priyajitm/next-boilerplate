import React from "react";
import { ButtonWithIcon } from "../../ui/buttonWithIcon";

interface OAuthProvider {
  label: string;
  icon: React.ComponentType;
}
interface OAuthButtonsProps {
  oauthConfig: Record<string, boolean>;
  providers: Record<string, OAuthProvider>;
}

export const OAuthButtons = ({ oauthConfig, providers }: OAuthButtonsProps) => {
  const AuthProviders = Object.entries(oauthConfig).reduce(
    (acc, [key, enabled]) => {
      acc[key] = {
        enabled,
        provider: providers[key],
      };
      return acc;
    },
    {} as Record<string, { enabled: boolean; provider: OAuthProvider }>
  );

  if (Object.entries(AuthProviders).every(([, { enabled }]) => !enabled)) {
    return null;
  }

  return (
    <div className="grid grid-cols-[repeat(2,_minmax(0,_1fr))] gap-2">
      {Object.entries(AuthProviders).map(([key, { enabled, provider }]) => {
        if (!enabled) return null;
        return (
          <ButtonWithIcon
            key={key}
            icon={<provider.icon />}
            label={provider.label}
            variant="outline"
          />
        );
      })}
    </div>
  );
};
