import Navbar from "@/components/navbar";
import { addGame } from "@/lib/games";
import { navigation } from "@/lib/utils";
import { Button, Box, TextField } from "@mui/material";
import { DiscordProfile } from "next-auth/providers/discord";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";

export default function Create() {
  const { data } = useSession();
  var user: DiscordProfile | undefined = undefined;
  if (data !== undefined) {
    user = data?.user as DiscordProfile;
  }

  const [name, setName] = useState("");
  const createRoom = () => {
    if (user === undefined) { return; }
    addGame({
      name: name,
      creator: {
        name: user.username,
        avatar: user.image
      }
    });
  };

  navigation.forEach(v => {
    if (v.name === "Create") {
      v.current = true;
    }
  });

  return (
    <>
      <Head>
        <title>Aux Battles</title>
        <link rel="icon" type="image/png" href="auxlogo.png"></link>
      </Head>
      <Navbar />
      <div className="flex items-center" style={{
        height: "calc(100vh - 200px);"
      }}>
        <div className="flex justify-center w-full">
          <Box component="span" sx={{ p: 2, border: "1px solid white", padding: "5rem" }}>
            {
              user !== undefined ?
                <>
                  <TextField onChange={e => setName(e.target.value)} id="outlined-basic" label="Room name" variant="outlined" sx={{color: "white"}} />
                  <Button onClick={() => createRoom()} style={{ height: "100%" }} variant="outlined">Create</Button>
                </> :
                <h1>Please log in before creating a room!</h1>
            }
          </Box>
        </div>
      </div>
    </>
  );
}
