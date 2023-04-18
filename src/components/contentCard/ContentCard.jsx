import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import image1 from "../../assets/yeni-zelanda.jpg";
import image2 from "../../assets/italya.jpg";
import image3 from "../../assets/ispanya.jpg";
import image4 from "../../assets/amerika.jpg";
import image5 from "../../assets/japonya.jpg";
import image6 from "../../assets/fransa.jpg";
import image7 from "../../assets/tayland.jpg";
import HorizontalLinearStepper from '../stepper/Stepper';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ContentCard({content, steps, stepsContent }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 1280, marginTop: "15px" }}>
      <CardHeader disableTypography sx={{ fontSize: "24px", fontWeight: 560 }}
        avatar={
          <Avatar sx={{ bgcolor: red[500], width:54, height:54 }} aria-label="recipe" src={content.flag}>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={content.name}
      // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="270"
        image={content.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content.entry}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>Fransa:</Typography> */}
          <Typography paragraph>
            {content.p1}
          </Typography>
          <Typography paragraph>
            {content.p2}
          </Typography>
          <Typography paragraph>
            {content.p3}
          </Typography>
          <HorizontalLinearStepper steps={steps} stepsContent={stepsContent} />
        </CardContent>
      </Collapse>

    </Card>
  );
}
