import { Box, Center, Flex, Heading, Text, VStack, useBoolean, chakra, Breadcrumb, BreadcrumbItem, BreadcrumbLink, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import MainButton from '../buttons/MainButton'


const Work = ({ imgSrc, title, description, tags = [], ...props }) => {
    const [hover, setHover] = useBoolean(false)

    return (
        <Box w='100%' h='100%' backgroundImage={imgSrc} backgroundRepeat='no-repeat' backgroundPosition='center' onMouseEnter={setHover.on} onMouseLeave={setHover.off} {...props}>
            <Box w='100%' h='100%' background={hover ? 'rgba(15, 15, 15, .5)' : 'rgba(15, 15, 15, 1)'} transition='.2s ease-in-out' >
                <Center w='100%' h='100%' px='40px'>
                    <VStack w='100%' h='100%' color='white' justifyContent='space-around' alignItems='start'>
                        <VStack justifyContent='space-between' h='50%' alignItems='start'>
                            <Heading fontSize='3em' fontWeight={300}>{title}</Heading>
                            <VStack opacity={hover ? 0 : 1} transition='.2s ease-in-out' transform={hover ? "translateY(40px)" : "translateY(0)"} alignItems='start'>
                                <Text fontSize='2em' fontWeight={300}>{description}</Text>
                                <Breadcrumb separator='|' color='white'>
                                    {tags.map(tag => (
                                        <BreadcrumbItem fontSize='1.2em' isCurrentPage>
                                            <BreadcrumbLink>
                                                {tag}
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                    ))}
                                </Breadcrumb>
                            </VStack>
                        </VStack>
                        <MainButton border='1px solid white'>View case study</MainButton>
                    </VStack>
                </Center>
            </Box>
        </Box>
    )
}

const RecentWorks = () => {
    const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

    return (
        <VStack w='100%' alignItems='start' borderBottom='1px solid #878787'>
            <Center h='400px' w='100%' borderBottom='1px solid #878787'>
                <Heading w='100%' pl='40px' fontSize='7em' fontWeight={300} color='#fff'>Recent work</Heading>
            </Center>

            <Flex w='100%' h='640px'>
                {
                    isSmallScreen ?
                        <Work
                            tags={['Brand', 'Content', 'Website']}
                            title='Axis Arbor'
                            description='Highly Skilled, Relationship Focused, Capital Advisory'
                            imgSrc='/background-phone.png'
                            borderRight='1px solid #878787'
                        /> :
                        <>
                            <Work
                                tags={['Brand', 'Content', 'Website']}
                                title='Axis Arbor'
                                description='Highly Skilled, Relationship Focused, Capital Advisory'
                                imgSrc='/background-phone.png'
                                borderRight='1px solid #878787'
                            />
                            <Work
                                tags={['Brand', 'Website', 'Content']}
                                title='Overlord'
                                description='Welcome the end of the world'
                                imgSrc='/overlord-bg.webp'
                                borderRight='1px solid #878787'
                            />
                            <Work
                                tags={['Website']}
                                title='8VC'
                                description='A different kind of VC.'
                                imgSrc='/phone2-bg.webp'
                            />
                        </>
                }
            </Flex>
        </VStack>
    )
}

export default RecentWorks