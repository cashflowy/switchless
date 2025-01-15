'use client'
import React from 'react'
import { Box, Card, Chip, Typography, Button, List, ListItem, ListItemDecorator, Divider, CardActions } from '@mui/joy';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function PricingSection({ priceList }) {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    mx:2
                }}
            >
                {priceList && priceList.map((li) => {
                    return (
                        <Card size="lg" variant="outlined" sx={{width: '300px' }} role="article">
                            <Chip size="sm" variant="outlined" color={li.type.color}>
                                {li.type.text}
                            </Chip>
                            <Typography level="h2">{li.header}</Typography>
                            <Divider inset="none" />
                            <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                                {li.featuresIncluded?.map((feature) => {
                                    return (
                                        <ListItem>
                                            <ListItemDecorator sx={{color:'success.500'}}>
                                                <Check fontSize='small'/>
                                            </ListItemDecorator>
                                            {feature}
                                        </ListItem>
                                    )
                                })}

                                {li.featuresExcluded?.map((feature) => {
                                    return (
                                        <ListItem>
                                            <ListItemDecorator sx={{color:'danger.500'}}>
                                                <Close fontSize='small'/>
                                            </ListItemDecorator>
                                            {feature}
                                        </ListItem>
                                    )
                                })}
                            </List>
                            <Divider inset="none" />
                            <CardActions sx={{m:0, display:'flex',justifyContent:'space-between', flexDirection:'column'}}>
                                {li.monthlyPrice && typeof li.monthlyPrice === 'string' && <Typography level="title-lg" sx={{ mr: 'auto' }}>
                                    {li.monthlyPrice}
                                </Typography>}
                                {li.monthlyPrice && typeof li.monthlyPrice === 'number' && <Typography level="title-lg" sx={{ mr: 'auto' }}>
                                    ₹{li.monthlyPrice}{' '}
                                    <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
                                         / user / month
                                        </Typography>
                                    </Typography>
                                }

                                <Button
                                    variant="soft"
                                    color="neutral"
                                    fullWidth
                                    endDecorator={<KeyboardArrowRight />}
                                    component='a'
                                    target='_blank'
                                    href={li.signUpButton.link}
                                >
                                    {li.signUpButton.text}
                                </Button>
                            </CardActions>
                        </Card>
                    )

                })}

            </Box>
        </>
    )
}