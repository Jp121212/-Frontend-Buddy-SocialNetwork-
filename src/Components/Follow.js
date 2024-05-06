import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import axios from "axios";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 30,
  height: 30,
  border: `1px solid ${theme.palette.background.paper}`,
}));

export default function BadgeAvatars(props) {
  const [following, setFollowing] = React.useState(false);
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/follows/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const followingIds = response.data.map((follow) => follow.following.id);
        setFollowing(followingIds.includes(props.pop.id));
      } catch (error) {
        console.error("Error al obtener seguimiento:", error);
      }
    };

    fetchFollowing();
  }, [id, token, props.pop.id]);

  const handleToggleFollow = async () => {
    try {
      if (following) {
        // Si ya está siguiendo al usuario, dejar de seguir
        await axios.delete(`http://localhost:5000/follow/${props.pop.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // Si no está siguiendo al usuario, comenzar a seguir
        await axios.post(
          "http://localhost:5000/follows",
          { followerId: parseInt(id), followingId: parseInt(props.pop.id) },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }
      setFollowing(!following);
    } catch (error) {
      console.error("Error al cambiar el seguimiento:", error);
    }
  };

  return (
    <Card style={{ backgroundColor: "black" }} className="cardb">
      <Stack direction="row" spacing={3}>
        <Avatar alt="Photo" src={props.pop.imagen} />
        <div className="p4">
          {props.pop.username}
          <br></br>
          <p className="p5">@{props.pop.username}</p>{" "}
          <button
            id="bt"
            onClick={handleToggleFollow}
            style={{
              border: "none",
              background: following ? "#FFFF" : "#dd8411",
              fontFamily: "verdana",
              padding: "1px",
              fontSize: "12px",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            {following ? "Unfollow" : "Follow"}
          </button>
        </div>
      </Stack>
    </Card>
  );
}
