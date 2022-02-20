import ProfileClient from "./profile.client";
import { getProfile } from "../lib/profile";
import useData from "../lib/use-data";

export default function Profile({ id }) {
  const profile = useData(`/profile/${id}`, () => getProfile(id));
  return <ProfileClient profile={profile} />;
}
