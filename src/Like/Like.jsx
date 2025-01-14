import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsBagDash, BsFillHeartFill } from "react-icons/bs";

export default function Like() {

    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box maxW='1300px' w='100%' p="5px 10px" position={"relative"} minH="800px" height={"auto"}>
                <Box minH={"700px"}>
                    {
                        ![{}].length &&
                        <Box position='absolute' left='0' w='100%'>
                            <Image m={'0 auto'} src="https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-3d-cute-inbox-like-icon-png-image_6092506.png" h='320px' w='100%' objectFit={'contain'} alt="" />
                            <Text textAlign={"center"} fontSize={"2xl"} color={"rgb(89,49,244)"}>тут пока ничего нет</Text>
                            <Link to="/">
                                <Button display={'block'} variant='unstyled' color='white' p='0 15px' className="colorWhite" m={'10px auto 0'} bg='rgb(89,49,244)'>Главное страница</Button>
                            </Link>
                        </Box>
                    }
                    {
                        <Text display='inline-block' fontSize={{base:"16px", sm:"22px", lg:'26px', xl:"26px"}} borderBottom='1px solid gray' mb='15px' p='0 0 10px' fontWeight="medium" color={"gray.700"}>Мои желания</Text>
                    }
                    <Grid templateColumns={{ base: 'repeat(2, 3fr)', sm: 'repeat(2, 3fr)', md: 'repeat(3, 3fr)', lg: 'repeat(4, 3fr)', xl: 'repeat(5, 3fr)', "2xl": 'repeat(5, 3fr)' }} gap={{ base: 2, md: 4 }}>
                        {
                            [{}].map((item, index) => (
                                <Box key={index} className="block_Cart" zIndex={5} overflow={'hidden'} borderRadius={'5px'} m={'0 auto'} p={{base:'2px', md:"4px", lg:"7px"}} w='95%' minH='300px'>
                                    <Button variant={"unstyled"} p={{ base: "0", lg: "5px" }} position={"absolute"} bg='rgba(116, 116, 116, 0.500)' right={0} top={0} zIndex={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                        <BsFillHeartFill fontSize='15px' className='redColor' color={'rgb(255, 255, 255)'}/>
                                    </Button>
                                    <Link to={`/products/${item.id}`}>
                                        <Box overflow={'hidden'} maxH={{base:'150px', lg:'200px'}} h='100%' p={{base:"5px", md:"2px"}}>
                                            <Image cursor={'pointer'} w='100%' h='100%' objectFit="contain" src={item.thumbnail} borderRadius='lg' />
                                        </Box>
                                    </Link>
                                    <Box h='100px' overflow='hidden' p='5px'>
                                        <Text fontSize={{base:"12px", lg:"14px"}} color='gray.600' fontWeight={700} overflow={'hidden'}>{item.title}</Text>
                                        <Text fontSize="12px" color='gray.500' fontWeight={400} overflow={'hidden'}>{item.description}</Text>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                                        <Box display='flex' alignItems='center'>
                                            <Image w='12px' src='https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png'/>
                                            <Text ml='5px' color='black' fontSize='12px' fontFamily='sans-serif'>{ item.rating }</Text>
                                        </Box>
                                        <Text color='blue.600' fontSize={{ base: "13px", sm: '14px', md: "16px" }} fontWeight="600">{item.price} $</Text>
                                        <Button variant='solid' colorScheme='blue' p={{base:'0', md:"5px 15px"}} >
                                            <BsBagDash />
                                        </Button>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
