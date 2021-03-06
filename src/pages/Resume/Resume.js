import { Grid, Typography, Paper, TextField } from "@material-ui/core";
import React from 'react';
import CustomTimeline, { CustomTimelineSeperator } from '../../components/Timeline/Timeline'
import WorkIcon from '@material-ui/icons/Work';
import CustomButton from '../../components/Buttond/Buttond'
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeperator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Icon from '@material-ui/core/Icon';

import resumeData from "../../utils/resumeData"
import './Resume.css';


const Resume = () => {
    return (
        <>
                       {/* // About Me  */}
            <Grid container className="section pb_45 pt_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">About Me</h6>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="body2" className="aboutme_text">{resumeData.about}</Typography>
                </Grid>
            </Grid>
        {/*Experience/Education  */}        
            <Grid container className="section pb_45">

                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Resume</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className="resume_timeline">
                        {/* Work History */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Work Experience" icon={<WorkIcon/>}>

                                {resumeData.experiences.map((experience) => (
                                    <TimelineItem>
                                        <CustomTimelineSeperator />
                                        

                                        {/* <TimelineSeperator className="seperator_padding">
                                            <TimelineDot variant="outlined" className="timeline_dot" />
                                            <TimelineConnector />
                                        </TimelineSeperator> */}
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{experience.title}</Typography>
                                            <Typography variant="caption" className="timeline_date">{experience.date}</Typography>
                                            <Typography variant="body2" className="timeline_description">{experience.description}</Typography>

                                        </TimelineContent>
                                    </TimelineItem>
                                ))}

                            </CustomTimeline>
                        </Grid>
                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Education" icon={<SchoolIcon/>}>

                                {resumeData.education.map((education) => (
                                    <TimelineItem>
                                        <CustomTimelineSeperator />
                                        

                                        {/* <TimelineSeperator className="seperator_padding">
                                            <TimelineDot variant="outlined" className="timeline_dot" />
                                            <TimelineConnector />
                                        </TimelineSeperator> */}
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{education.title}</Typography>
                                            <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                                            <Typography variant="body2" className="timeline_description">{education.description}</Typography>

                                        </TimelineContent>
                                    </TimelineItem>
                                ))}

                            </CustomTimeline>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

        {/*Services  */}
            <Grid container className="section pb_45" >
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">My Services</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} justify='space-around'>
                        {/* {} = js mod? */}
                        {resumeData.services.map((service) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <div className="service">
                                    <Icon className="service_icon">{service.icon}</Icon>
                                    <Typography className="service_title" variant="h6">{service.title}</Typography>
                                    <Typography className="service_description" variant="body2">{service.description}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

        {/*Skills  */}
            <Grid container className="section graybg pb_45 p_50">
                <Grid item xs={12}>
                    <Grid container justify="spacebetween" spacing={3}>
                    {resumeData.skills.map((skill) => (
                    <Grid item xs={12} small={6} md={3}>
                        <Paper elevation={0} className="skill">
                            <Typography variant="h6" className="skill_title">
                                {skill.title}
                            </Typography>

                            {skill.description.map(element => (
                                <Typography variant="body2" className="skill_description">
                                    <TimelineDot variant={'outlined'} className="timeline_dot" />
                                    {element}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                ))}

                    </Grid>
                </Grid>
                
            </Grid>

        {/*Contact */}
            <Grid container spacing={7} className="section pt_45 pb_45">
                {/* Contact Form */}
                <Grid item xs={12} lg={12}>
                    <Grid container>
                        <Grid item className="section_title mb_30">
                            <span></span>
                            <h6 className="section_title_text">Contact Form</h6>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name="name" label="Name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name="email" label="E-mail" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name="message" label="Message" multiline rows={4} />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton text="Submit"/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Contact Info */}
                {/* Leaving lg={7} instead of {5} causes Contactinfo to render under instead of to the right of , the contact form why? */}
               
            </Grid>    
        </>
        )
};

export default Resume
