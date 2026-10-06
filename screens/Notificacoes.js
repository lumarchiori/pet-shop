import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import {
    JosefinSans_400Regular,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

export default function Notificacoes({ navigation }) {

    const [fontsLoaded] = useFonts({
        JosefinSans_400Regular,
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
                contentContainerStyle={styles.content}
            >

                {/* Cabeçalho */}
                <View style={styles.header}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                        style={styles.backButton}
                    >
                        <Ionicons
                            name="arrow-back"
                            size={22}
                            color="#6A0DAD"
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>
                        Notificações
                    </Text>

                    <View style={styles.headerIcon}>
                        <Ionicons
                            name="notifications"
                            size={24}
                            color="#6A0DAD"
                        />
                    </View>

                </View>


                {/* Introdução */}
                <View style={styles.introduction}>
                    <Text style={styles.title}>
                        Fique por dentro! 🐾
                    </Text>

                    <Text style={styles.subtitle}>
                        Aqui você encontra os lembretes e novidades
                        sobre os cuidados do seu pet.
                    </Text>
                </View>


                {/* Notificação nova */}
                <Text style={styles.sectionTitle}>
                    Recentes
                </Text>

                <View style={styles.notificationCard}>

                    <View style={styles.iconContainerYellow}>
                        <Ionicons
                            name="calendar"
                            size={25}
                            color="#6A0DAD"
                        />
                    </View>

                    <View style={styles.notificationContent}>

                        <View style={styles.notificationTitleRow}>

                            <Text style={styles.notificationTitle}>
                                Banho agendado!
                            </Text>

                            <View style={styles.newBadge}>
                                <Text style={styles.newBadgeText}>
                                    NOVA
                                </Text>
                            </View>

                        </View>

                        <Text style={styles.notificationText}>
                            O banho do seu pet está agendado para
                            amanhã às 10:00.
                        </Text>

                        <Text style={styles.time}>
                            Há 10 minutos
                        </Text>

                    </View>

                </View>


                {/* Segunda notificação */}
                <View style={styles.notificationCard}>

                    <View style={styles.iconContainerPurple}>
                        <Ionicons
                            name="medical"
                            size={25}
                            color="#FFFFFF"
                        />
                    </View>

                    <View style={styles.notificationContent}>

                        <Text style={styles.notificationTitle}>
                            Lembrete de consulta
                        </Text>

                        <Text style={styles.notificationText}>
                            Não esqueça da consulta veterinária
                            do seu pet nesta semana.
                        </Text>

                        <Text style={styles.time}>
                            Ontem
                        </Text>

                    </View>

                </View>


                {/* Terceira notificação */}
                <Text style={styles.sectionTitle}>
                    Anteriores
                </Text>

                <View style={styles.notificationCard}>

                    <View style={styles.iconContainerYellow}>
                        <Ionicons
                            name="pricetag"
                            size={25}
                            color="#6A0DAD"
                        />
                    </View>

                    <View style={styles.notificationContent}>

                        <Text style={styles.notificationTitle}>
                            Novidades na loja 🛍️
                        </Text>

                        <Text style={styles.notificationText}>
                            Confira nossos novos produtos para
                            deixar seu pet ainda mais feliz.
                        </Text>

                        <Text style={styles.time}>
                            02 de outubro
                        </Text>

                    </View>

                </View>


            </ScrollView>


            {/* Menu inferior */}
            <View style={styles.bottomMenu}>

                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Ionicons
                        name="home-outline"
                        size={24}
                        color="#80698D"
                    />

                    <Text style={styles.menuText}>
                        Home
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.menuItem}
                >
                    <View style={styles.activeIcon}>
                        <Ionicons
                            name="notifications"
                            size={23}
                            color="#FFFFFF"
                        />
                    </View>

                    <Text style={styles.activeMenuText}>
                        Notificações
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate("Perfil")}
                >
                    <Ionicons
                        name="person-outline"
                        size={24}
                        color="#80698D"
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

    content: {
        paddingHorizontal: 22,
        paddingTop: 15,
        paddingBottom: 110,
    },


    /* Cabeçalho */

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 25,
    },

    backButton: {
        width: 42,
        height: 42,
        borderRadius: 14,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#E9DDF0",
    },

    headerTitle: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 23,
        color: "#3B075C",
    },

    headerIcon: {
        width: 42,
        height: 42,
        borderRadius: 14,
        backgroundColor: "#FFB81C",
        alignItems: "center",
        justifyContent: "center",
    },


    /* Introdução */

    introduction: {
        marginBottom: 25,
    },

    title: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 25,
        color: "#6A0DAD",
        marginBottom: 6,
    },

    subtitle: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 13,
        color: "#80698D",
        lineHeight: 19,
        maxWidth: 330,
    },


    /* Seções */

    sectionTitle: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 17,
        color: "#3B075C",
        marginBottom: 12,
        marginTop: 5,
    },


    /* Cards */

    notificationCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 16,
        flexDirection: "row",
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#E9DDF0",
    },

    iconContainerYellow: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: "#FFB81C",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 13,
    },

    iconContainerPurple: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: "#6A0DAD",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 13,
    },

    notificationContent: {
        flex: 1,
    },

    notificationTitleRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5,
    },

    notificationTitle: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 15,
        color: "#3B075C",
        flex: 1,
    },

    notificationText: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 12,
        color: "#80698D",
        lineHeight: 17,
        marginTop: 5,
    },

    time: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 10,
        color: "#A99AAF",
        marginTop: 8,
    },

    newBadge: {
        backgroundColor: "#6A0DAD",
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 7,
    },

    newBadgeText: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 8,
        color: "#FFFFFF",
    },


    /* Menu inferior */

    bottomMenu: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 78,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#E9DDF0",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 5,
    },

    menuItem: {
        alignItems: "center",
        justifyContent: "center",
        minWidth: 80,
    },

    menuText: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 10,
        color: "#80698D",
        marginTop: 4,
    },

    activeMenuText: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 10,
        color: "#6A0DAD",
        marginTop: 4,
    },

    activeIcon: {
        width: 38,
        height: 30,
        borderRadius: 12,
        backgroundColor: "#6A0DAD",
        alignItems: "center",
        justifyContent: "center",
    },

});