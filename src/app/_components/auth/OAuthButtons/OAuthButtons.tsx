import { signupConfig } from "@/app/_config/auth.config";
import { OAuthProviders } from "@/app/_config/auth.config";
import { ButtonWithIcon } from "../../buttonWithIcon";

export const OAuthButtons = () => {
  if (!Object.entries(signupConfig.oauth).some(([, enabled]) => enabled)) {
    return null;
  }

  return (
    <div className="grid grid-cols-[repeat(2,_minmax(0,_1fr))] gap-2">
      {Object.entries(signupConfig.oauth).map(([provider, enabled]) => {
        if (!enabled) return null;
        const ProviderIcon =
          OAuthProviders[provider as keyof typeof OAuthProviders].icon;
        return (
          <ButtonWithIcon
            key={provider}
            icon={<ProviderIcon />}
            label={
              OAuthProviders[provider as keyof typeof OAuthProviders].label
            }
          />
        );
      })}
    </div>
  );
};
