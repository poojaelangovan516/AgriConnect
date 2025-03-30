import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/login" />; // Always redirects to login.tsx when the app starts
}
