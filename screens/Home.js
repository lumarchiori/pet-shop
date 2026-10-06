import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";


export default function Home({ navigation }) {

    const [fontsLoaded] = useFonts({
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
    });


    if (!fontsLoaded) {
        return null;
    }


    return (

        <SafeAreaView style={styles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >

                {/* cabeçalho */}

                <View style={styles.header}>

                    <View>

                        <Text style={styles.brand}>
                            🐾 PETSHOP
                        </Text>

                        <Text style={styles.hello}>
                            Olá! 💜
                        </Text>

                    </View>


                    <TouchableOpacity
                        style={styles.notificationButton}
                        onPress={() =>
                            navigation.navigate("Notificacoes")
                        }
                    >

                        <Ionicons
                            name="notifications"
                            size={25}
                            color="#6A0DAD"
                        />

                        <View style={styles.notificationDot} />

                    </TouchableOpacity>

                </View>


                {/* banner principal */}

                <View style={styles.banner}>

                    <View style={styles.bannerText}>

                        <Text style={styles.bannerSmall}>
                            TUDO PARA O SEU
                        </Text>

                        <Text style={styles.bannerTitle}>
                            MELHOR AMIGO!
                        </Text>

                        <Text style={styles.bannerDescription}>
                            Cuidado, carinho e diversão em um só lugar.
                        </Text>

                    </View>


                    {/* cachorro da logo */}

                    <Image
                        source={require("../assets/dog-logo.png")}
                        style={styles.bigDog}
                        resizeMode="contain"
                    />


                    <View style={styles.yellowCircle} />


                </View>


                {/* título da seção */}

                <View style={styles.sectionHeader}>

                    <Text style={styles.sectionTitle}>
                        O que seu pet precisa?
                    </Text>

                    <Text style={styles.sectionSubtitle}>
                        Escolha um serviço
                    </Text>

                </View>


                {/* serviços */}

                <View style={styles.servicesGrid}>

                    {/* banho */}

                    <TouchableOpacity
                        style={[
                            styles.serviceCard,
                            styles.purpleCard
                        ]}
                        activeOpacity={0.85}
                    >

                        <View style={styles.serviceIcon}>

                            <Text style={styles.emoji}>
                                🛁
                            </Text>

                        </View>

                        <Text style={styles.serviceTitleWhite}>
                            BANHO
                        </Text>

                        <Text style={styles.serviceTextWhite}>
                            Deixe seu pet limpinho!
                        </Text>

                        <View style={styles.arrowYellow}>

                            <Ionicons
                                name="arrow-forward"
                                size={18}
                                color="#6A0DAD"
                            />

                        </View>

                    </TouchableOpacity>


                    {/* tosa */}

                    <TouchableOpacity
                        style={[
                            styles.serviceCard,
                            styles.yellowCard
                        ]}
                        activeOpacity={0.85}
                    >

                        <View style={styles.serviceIconWhite}>

                            <Text style={styles.emoji}>
                                ✂️
                            </Text>

                        </View>

                        <Text style={styles.serviceTitlePurple}>
                            TOSA
                        </Text>

                        <Text style={styles.serviceTextPurple}>
                            Um visual especial!
                        </Text>

                        <View style={styles.arrowPurple}>

                            <Ionicons
                                name="arrow-forward"
                                size={18}
                                color="#FFFFFF"
                            />

                        </View>

                    </TouchableOpacity>


                    {/* consulta */}

                    <TouchableOpacity
                        style={[
                            styles.serviceCard,
                            styles.yellowCard
                        ]}
                        activeOpacity={0.85}
                    >

                        <View style={styles.serviceIconWhite}>

                            <Text style={styles.emoji}>
                                🩺
                            </Text>

                        </View>

                        <Text style={styles.serviceTitlePurple}>
                            CONSULTA
                        </Text>

                        <Text style={styles.serviceTextPurple}>
                            Cuide da saúde dele!
                        </Text>

                        <View style={styles.arrowPurple}>

                            <Ionicons
                                name="arrow-forward"
                                size={18}
                                color="#FFFFFF"
                            />

                        </View>

                    </TouchableOpacity>


                    {/* produtos */}

                    <TouchableOpacity
                        style={[
                            styles.serviceCard,
                            styles.purpleCard
                        ]}
                        activeOpacity={0.85}
                    >

                        <View style={styles.serviceIcon}>

                            <Text style={styles.emoji}>
                                🛍️
                            </Text>

                        </View>

                        <Text style={styles.serviceTitleWhite}>
                            PRODUTOS
                        </Text>

                        <Text style={styles.serviceTextWhite}>
                            Tudo para seu pet!
                        </Text>

                        <View style={styles.arrowYellow}>

                            <Ionicons
                                name="arrow-forward"
                                size={18}
                                color="#6A0DAD"
                            />

                        </View>

                    </TouchableOpacity>

                </View>


                {/* destaque */}

                <View style={styles.highlight}>

                    <View>

                        <Text style={styles.highlightSmall}>
                            CUIDADO COM CARINHO
                        </Text>

                        <Text style={styles.highlightTitle}>
                            Seu pet merece{"\n"}
                            o melhor! 💛
                        </Text>

                        <TouchableOpacity
                            style={styles.highlightButton}
                        >

                            <Text style={styles.highlightButtonText}>
                                AGENDAR AGORA
                            </Text>

                        </TouchableOpacity>

                    </View>


                    <Text style={styles.highlightDog}>
                        🐕
                    </Text>


                    <Text style={styles.highlightBone}>
                        🦴
                    </Text>

                </View>

            </ScrollView>


            {/* menu inferior */}

            <View style={styles.bottomMenu}>

                <TouchableOpacity
                    style={styles.menuItem}
                >

                    <Ionicons
                        name="home"
                        size={25}
                        color="#6A0DAD"
                    />

                    <Text style={styles.activeMenuText}>
                        Home
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() =>
                        navigation.navigate("Notificacoes")
                    }
                >

                    <Ionicons
                        name="notifications-outline"
                        size={25}
                        color="#777"
                    />

                    <Text style={styles.menuText}>
                        Notificações
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() =>
                        navigation.navigate("Perfil")
                    }
                >

                    <Ionicons
                        name="person-outline"
                        size={25}
                        color="#777"
                    />

                    <Text style={styles.menuText}>
                        Perfil
                    </Text>

                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFF9EE",
    },


    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 100,
    },


    /* cabeçalho */

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 18,
    },

    brand: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 20,
        color: "#6A0DAD",
        letterSpacing: 1,
    },

    hello: {
        fontFamily: "JosefinSans_500Medium",
        fontSize: 14,
        color: "#3B075C",
        marginTop: 3,
    },

    notificationButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 5,
    },

    notificationDot: {
        width: 9,
        height: 9,
        borderRadius: 5,
        backgroundColor: "#FFB81C",
        position: "absolute",
        right: 10,
        top: 9,
        borderWidth: 2,
        borderColor: "#FFFFFF",
    },


    /* banner */

    banner: {
        height: 190,
        backgroundColor: "#6A0DAD",
        borderRadius: 28,
        overflow: "hidden",
        padding: 22,
        position: "relative",
        marginBottom: 25,
    },

    bannerText: {
        width: "72%",
        zIndex: 2,
    },

    bannerSmall: {
        fontFamily: "JosefinSans_700Bold",
        color: "#FFB81C",
        fontSize: 12,
        letterSpacing: 1,
    },

    bannerTitle: {
        fontFamily: "JosefinSans_700Bold",
        color: "#FFFFFF",
        fontSize: 27,
        lineHeight: 31,
        marginTop: 5,
    },

    bannerDescription: {
        fontFamily: "JosefinSans_400Regular",
        color: "#F5E9FF",
        fontSize: 12,
        lineHeight: 17,
        marginTop: 10,
    },


    /* cachorro da logo */

    bigDog: {
        position: "absolute",
        width: 170,
        height: 170,
        right: 0,
        bottom: 0,
        zIndex: 3,
    },

    yellowCircle: {
        position: "absolute",
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: "#FFB81C",
        right: -45,
        bottom: -55,
    },


    /* título da sessao */

    sectionHeader: {
        marginBottom: 15,
    },

    sectionTitle: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 22,
        color: "#3B075C",
    },

    sectionSubtitle: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 13,
        color: "#80698D",
        marginTop: 3,
    },


    /* cards de serviços */

    servicesGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },

    serviceCard: {
        width: "48%",
        minHeight: 175,
        borderRadius: 24,
        padding: 16,
        marginBottom: 13,
        position: "relative",
        overflow: "hidden",
    },

    purpleCard: {
        backgroundColor: "#6A0DAD",
    },

    yellowCard: {
        backgroundColor: "#FFB81C",
    },

    serviceIcon: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: "#7D22B8",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 13,
    },

    serviceIconWhite: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: "#FFD66B",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 13,
    },

    emoji: {
        fontSize: 25,
    },

    serviceTitleWhite: {
        fontFamily: "JosefinSans_700Bold",
        color: "#FFFFFF",
        fontSize: 18,
    },

    serviceTitlePurple: {
        fontFamily: "JosefinSans_700Bold",
        color: "#6A0DAD",
        fontSize: 18,
    },

    serviceTextWhite: {
        fontFamily: "JosefinSans_400Regular",
        color: "#EEDCFA",
        fontSize: 11,
        marginTop: 5,
        lineHeight: 15,
        width: "85%",
    },

    serviceTextPurple: {
        fontFamily: "JosefinSans_500Medium",
        color: "#4C1670",
        fontSize: 11,
        marginTop: 5,
        lineHeight: 15,
        width: "85%",
    },

    arrowYellow: {
        position: "absolute",
        right: 13,
        bottom: 13,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#FFB81C",
        justifyContent: "center",
        alignItems: "center",
    },

    arrowPurple: {
        position: "absolute",
        right: 13,
        bottom: 13,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#6A0DAD",
        justifyContent: "center",
        alignItems: "center",
    },


    /* destaque */

    highlight: {
        height: 150,
        backgroundColor: "#3B075C",
        borderRadius: 25,
        marginTop: 8,
        padding: 18,
        overflow: "hidden",
        position: "relative",
    },

    highlightSmall: {
        fontFamily: "JosefinSans_700Bold",
        color: "#FFB81C",
        fontSize: 10,
        letterSpacing: 1,
    },

    highlightTitle: {
        fontFamily: "JosefinSans_700Bold",
        color: "#FFFFFF",
        fontSize: 21,
        lineHeight: 24,
        marginTop: 5,
    },

    highlightButton: {
        backgroundColor: "#FFB81C",
        alignSelf: "flex-start",
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        marginTop: 10,
    },

    highlightButtonText: {
        fontFamily: "JosefinSans_700Bold",
        color: "#6A0DAD",
        fontSize: 10,
    },

    highlightDog: {
        position: "absolute",
        right: 8,
        bottom: -8,
        fontSize: 90,
    },

    highlightBone: {
        position: "absolute",
        right: 105,
        top: 10,
        fontSize: 25,
        transform: [
            {
                rotate: "20deg",
            },
        ],
    },


    /* menu inferior */

    bottomMenu: {
        position: "absolute",
        bottom: 10,
        left: 15,
        right: 15,
        height: 68,
        backgroundColor: "#FFFFFF",
        borderRadius: 22,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        elevation: 8,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
    },

    menuItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    menuText: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 10,
        color: "#777",
        marginTop: 4,
    },

    activeMenuText: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 10,
        color: "#6A0DAD",
        marginTop: 4,
    },

});