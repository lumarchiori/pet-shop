import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useState } from "react";

import {
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

import { logout } from "../services/auth";

export default function Perfil({ navigation }) {

    const [petAberto, setPetAberto] = useState(false);
    const [petSelecionado, setPetSelecionado] = useState("Cachorro");

    const [fontsLoaded] = useFonts({
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
    });

    const pets = [
        { nome: "Cachorro", emoji: "🐶" },
        { nome: "Gato", emoji: "🐱" },
        { nome: "Coelho", emoji: "🐰" },
        { nome: "Hamster", emoji: "🐹" },
        { nome: "Ave", emoji: "🐦" },
        { nome: "Réptil", emoji: "🐢" },
        { nome: "Peixe", emoji: "🐠" },
        { nome: "Outro", emoji: "🐾" },
    ];

    async function realizarLogout() {
        try {
            await logout();
            alert("Logout realizado com sucesso!");
            navigation.navigate("Login");
        } catch (error) {
            alert("Não foi possível sair da conta");
            console.log(error);
        }
    }

    if (!fontsLoaded) {
        return null;
    }

    const petAtual = pets.find(
        (pet) => pet.nome === petSelecionado
    );

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* cabeçalho */}

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
                        Meu perfil
                    </Text>

                    <View style={styles.headerSpacer} />

                </View>


                {/* perfil principal */}

                <View style={styles.profileCard}>

                    <View style={styles.profileImageContainer}>

                        <Image
                            source={require("../assets/cat-logo.png")}
                            style={styles.profileImage}
                            resizeMode="contain"
                        />

                    </View>

                    <Text style={styles.profileTitle}>
                        Meu perfil 🐾
                    </Text>

                    <Text style={styles.profileSubtitle}>
                        Cuide da sua conta e das informações
                        do seu pet.
                    </Text>

                </View>


                {/* dados da conta */}

                <Text style={styles.sectionTitle}>
                    Dados da conta
                </Text>

                <View style={styles.infoCard}>

                    <View style={styles.infoItem}>

                        <View style={styles.infoIcon}>
                            <Ionicons
                                name="mail-outline"
                                size={21}
                                color="#6A0DAD"
                            />
                        </View>

                        <View style={styles.infoText}>

                            <Text style={styles.infoLabel}>
                                E-mail
                            </Text>

                            <Text style={styles.infoValue}>
                                Usuário cadastrado
                            </Text>

                        </View>

                    </View>

                </View>


                {/* meu pet */}

                <Text style={styles.sectionTitle}>
                    Meu pet 🐾
                </Text>

                <TouchableOpacity
                    style={styles.petToggle}
                    onPress={() => setPetAberto(!petAberto)}
                    activeOpacity={0.8}
                >

                    <View style={styles.petToggleLeft}>

                        <View style={styles.petToggleIcon}>

                            <Text style={styles.petToggleEmoji}>
                                {petAtual?.emoji}
                            </Text>

                        </View>

                        <View>

                            <Text style={styles.petToggleTitle}>
                                {petSelecionado}
                            </Text>

                            <Text style={styles.petToggleSubtitle}>
                                Toque para alterar
                            </Text>

                        </View>

                    </View>

                    <Ionicons
                        name={
                            petAberto
                                ? "chevron-up"
                                : "chevron-down"
                        }
                        size={21}
                        color="#6A0DAD"
                    />

                </TouchableOpacity>


                {/* opções dos pets */}

                {petAberto && (

                    <View style={styles.petOptions}>

                        <Text style={styles.petQuestion}>
                            Qual é o seu companheiro?
                        </Text>

                        <View style={styles.petGrid}>

                            {pets.map((pet) => {

                                const selecionado =
                                    petSelecionado === pet.nome;

                                return (

                                    <TouchableOpacity
                                        key={pet.nome}
                                        style={[
                                            styles.petCard,
                                            selecionado &&
                                            styles.petCardSelected,
                                        ]}
                                        onPress={() => {
                                            setPetSelecionado(
                                                pet.nome
                                            );
                                            setPetAberto(false);
                                        }}
                                        activeOpacity={0.8}
                                    >

                                        <Text style={styles.petEmoji}>
                                            {pet.emoji}
                                        </Text>

                                        <Text
                                            style={[
                                                styles.petName,
                                                selecionado &&
                                                styles.petNameSelected,
                                            ]}
                                        >
                                            {pet.nome}
                                        </Text>

                                        {selecionado && (

                                            <View
                                                style={
                                                    styles.checkContainer
                                                }
                                            >

                                                <Ionicons
                                                    name="checkmark"
                                                    size={12}
                                                    color="#FFFFFF"
                                                />

                                            </View>

                                        )}

                                    </TouchableOpacity>

                                );

                            })}

                        </View>

                    </View>

                )}


                {/* conta */}

                <Text style={styles.sectionTitle}>
                    Conta
                </Text>

                <TouchableOpacity
                    style={styles.optionCard}
                    activeOpacity={0.8}
                >

                    <View style={styles.optionIcon}>

                        <Ionicons
                            name="settings-outline"
                            size={22}
                            color="#6A0DAD"
                        />

                    </View>

                    <View style={styles.optionTextContainer}>

                        <Text style={styles.optionTitle}>
                            Configurações
                        </Text>

                        <Text style={styles.optionSubtitle}>
                            Preferências da sua conta
                        </Text>

                    </View>

                    <Ionicons
                        name="chevron-forward"
                        size={20}
                        color="#A99AAF"
                    />

                </TouchableOpacity>


                {/* logout */}

                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={realizarLogout}
                    activeOpacity={0.85}
                >

                    <Ionicons
                        name="log-out-outline"
                        size={22}
                        color="#FFFFFF"
                    />

                    <Text style={styles.logoutText}>
                        SAIR DA CONTA
                    </Text>

                </TouchableOpacity>

            </ScrollView>


            {/* menu inferior */}

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
                    onPress={() =>
                        navigation.navigate("Notificacoes")
                    }
                >

                    <Ionicons
                        name="notifications-outline"
                        size={24}
                        color="#80698D"
                    />

                    <Text style={styles.menuText}>
                        Notificações
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.menuItem}
                >

                    <View style={styles.activeIcon}>

                        <Ionicons
                            name="person"
                            size={22}
                            color="#FFFFFF"
                        />

                    </View>

                    <Text style={styles.activeMenuText}>
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
        paddingBottom: 120,
    },


    /* cabeçalho */

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 22,
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

    headerSpacer: {
        width: 42,
    },


    /* perfil */

    profileCard: {
        backgroundColor: "#6A0DAD",
        borderRadius: 25,
        alignItems: "center",
        paddingVertical: 24,
        paddingHorizontal: 20,
    },

    profileImageContainer: {
        width: 115,
        height: 115,
        borderRadius: 58,
        backgroundColor: "#FFB81C",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    },

    profileImage: {
        width: 115,
        height: 115,
    },

    profileTitle: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 23,
        color: "#FFFFFF",
    },

    profileSubtitle: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 12,
        color: "#EEDCFA",
        textAlign: "center",
        lineHeight: 17,
        marginTop: 6,
        maxWidth: 290,
    },


    /* seções */

    sectionTitle: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 17,
        color: "#3B075C",
        marginTop: 25,
        marginBottom: 10,
    },


    /* dados */

    infoCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#E9DDF0",
    },

    infoItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
    },

    infoIcon: {
        width: 43,
        height: 43,
        borderRadius: 14,
        backgroundColor: "#F3E9F8",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    infoText: {
        flex: 1,
    },

    infoLabel: {
        fontFamily: "JosefinSans_600SemiBold",
        fontSize: 11,
        color: "#80698D",
    },

    infoValue: {
        fontFamily: "JosefinSans_500Medium",
        fontSize: 14,
        color: "#3B075C",
        marginTop: 3,
    },


    /* toggle do pet */

    petToggle: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 13,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#E9DDF0",
    },

    petToggleLeft: {
        flexDirection: "row",
        alignItems: "center",
    },

    petToggleIcon: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: "#FFF4D6",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    petToggleEmoji: {
        fontSize: 27,
    },

    petToggleTitle: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 15,
        color: "#3B075C",
    },

    petToggleSubtitle: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 11,
        color: "#80698D",
        marginTop: 3,
    },


    /* opções dos pets */

    petOptions: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 15,
        marginTop: 8,
        borderWidth: 1,
        borderColor: "#E9DDF0",
    },

    petQuestion: {
        fontFamily: "JosefinSans_600SemiBold",
        fontSize: 13,
        color: "#3B075C",
        marginBottom: 13,
    },

    petGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 9,
    },

    petCard: {
        width: "48%",
        minHeight: 75,
        backgroundColor: "#FFF9EE",
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: "#E9DDF0",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    petCardSelected: {
        backgroundColor: "#6A0DAD",
        borderColor: "#6A0DAD",
    },

    petEmoji: {
        fontSize: 25,
        marginBottom: 4,
    },

    petName: {
        fontFamily: "JosefinSans_600SemiBold",
        fontSize: 12,
        color: "#3B075C",
    },

    petNameSelected: {
        color: "#FFFFFF",
    },

    checkContainer: {
        position: "absolute",
        top: 6,
        right: 6,
        width: 19,
        height: 19,
        borderRadius: 10,
        backgroundColor: "#FFB81C",
        alignItems: "center",
        justifyContent: "center",
    },


    /* configurações */

    optionCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E9DDF0",
    },

    optionIcon: {
        width: 43,
        height: 43,
        borderRadius: 14,
        backgroundColor: "#F3E9F8",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    optionTextContainer: {
        flex: 1,
    },

    optionTitle: {
        fontFamily: "JosefinSans_600SemiBold",
        fontSize: 14,
        color: "#3B075C",
    },

    optionSubtitle: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 11,
        color: "#80698D",
        marginTop: 3,
    },


    /* logout */

    logoutButton: {
        height: 55,
        backgroundColor: "#6A0DAD",
        borderRadius: 18,
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 9,
        elevation: 3,
        shadowColor: "#6A0DAD",
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    logoutText: {
        fontFamily: "JosefinSans_700Bold",
        color: "#FFFFFF",
        fontSize: 14,
        letterSpacing: 1,
    },


    /* menu inferior */

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