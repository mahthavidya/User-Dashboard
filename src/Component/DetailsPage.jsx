import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DetailsPage() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existinguser = users.filter((f) => f.id == id);
  const { username, email, role } = existinguser[0];

  return (
    <Card sx={{ maxWidth: 500, marginTop: "150px", marginLeft: "350px" }}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          User Details
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>UserName:{username}</h3>
          <h3>Email:{email}</h3>
          <h3>Role:{role}</h3>
        </Typography>
      </CardContent>
      <CardActions style={{ marginLeft: "200px" }}>
        <Link to={`/edit/${id}`} className="btn btn-lg btn-primary">
          Edit
        </Link>
      </CardActions>
    </Card>
  );
}
