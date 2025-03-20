export const AuthCred = async ({ email, password }: any) => {
  const res = await fetch(`${process.env.API_URL}/api/auth/cred`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
};

export const CreateAccount = async ({ email, password, name }: any) => {
  const res = await fetch(`${process.env.API_URL}/api/auth/sign-up`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
  });

  return res.json();
};
