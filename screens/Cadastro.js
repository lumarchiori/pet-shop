import { useState } from "react";
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Image,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import {
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

import { cadastrar } from "../services/auth";

export default function Cadastro({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [fontsLoaded] = useFonts({
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
    });

    async function realizarCadastro() {
        if (!email || !senha) {
            alert("Preencha todos os campos.");
            return;
        }

        try {
            await cadastrar(email, senha);
            alert("Usuário cadastrado.");
            navigation.navigate("Login");
        } catch (error) {
            alert("Não foi possível realizar o cadastro.");
            console.log(error);
        }
    }

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.keyboard}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >

                    {/* Logo */}
                    <View style={styles.logoContainer}>


                        <Text style={styles.logo}>
                            PETSHOP
                        </Text>

                        <Text style={styles.logoSubtitle}>
                            carinho em cada cuidado
                        </Text>

                        <Image
                            source={require("../assets/cat-logo.png")}
                            style={styles.petLogo}
                            resizeMode="contain"
                        />


                    </View>


                    {/* Título */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Crie sua conta! 💜
                        </Text>

                        <Text style={styles.subtitle}>
                            Faça seu cadastro e tenha tudo para
                            cuidar do seu melhor amigo.
                        </Text>
                    </View>


                    {/* Formulário */}
                    <View style={styles.form}>

                        {/* Email */}
                        <Text style={styles.label}>
                            E-mail
                        </Text>

                        <View style={styles.inputContainer}>

                            <Ionicons
                                name="mail-outline"
                                size={21}
                                color="#6A0DAD"
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu e-mail"
                                placeholderTextColor="#A99AAF"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />

                        </View>


                        {/* Senha */}
                        <Text style={styles.label}>
                            Senha
                        </Text>

                        <View style={styles.inputContainer}>

                            <Ionicons
                                name="lock-closed-outline"
                                size={21}
                                color="#6A0DAD"
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Crie uma senha"
                                placeholderTextColor="#A99AAF"
                                value={senha}
                                onChangeText={setSenha}
                                secureTextEntry
                            />

                        </View>


                        {/* Botão cadastrar */}
                        <TouchableOpacity
                            style={styles.registerButton}
                            onPress={realizarCadastro}
                            activeOpacity={0.85}
                        >
                            <Text style={styles.registerButtonText}>
                                CRIAR CONTA
                            </Text>

                            <Ionicons
                                name="arrow-forward"
                                size={20}
                                color="#FFFFFF"
                            />
                        </TouchableOpacity>


                        {/* Voltar para login */}
                        <View style={styles.loginContainer}>

                            <Text style={styles.loginText}>
                                Já possui uma conta?
                            </Text>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text style={styles.loginButton}>
                                    Entrar
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFF9EE",
    },

    keyboard: {
        flex: 1,
    },

    scrollContent: {
        paddingHorizontal: 25,
        paddingTop: 15,
        paddingBottom: 40,
    },


    /* Logo */

    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 5,
    },

    petLogo: {
        width: 200,
        height: 185,
        marginBottom: 5,
    },

    logo: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 25,
        color: "#6A0DAD",
        letterSpacing: 2,
        textAlign: "center",
    },

    logoSubtitle: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 11,
        color: "#80698D",
        marginTop: 2,
        textAlign: "center",
    },


    /* Título */

    titleContainer: {
        alignItems: "center",
        marginTop: 0,
        marginBottom: 25,
    },

    title: {
        fontFamily: "JosefinSans_700Bold",
        fontSize: 27,
        color: "#3B075C",
        textAlign: "center",
    },

    subtitle: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 13,
        color: "#80698D",
        textAlign: "center",
        lineHeight: 19,
        marginTop: 8,
        maxWidth: 300,
    },


    /* Formulário */

    form: {
        width: "100%",
    },

    label: {
        fontFamily: "JosefinSans_600SemiBold",
        fontSize: 14,
        color: "#3B075C",
        marginBottom: 7,
        marginTop: 10,
    },

    inputContainer: {
        height: 54,
        backgroundColor: "#FFFFFF",
        borderRadius: 17,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        borderWidth: 1.5,
        borderColor: "#E9DDF0",
        marginBottom: 3,
    },

    input: {
        flex: 1,
        fontFamily: "JosefinSans_400Regular",
        fontSize: 14,
        color: "#3B075C",
        marginLeft: 11,
    },


    /* Botão */

    registerButton: {
        height: 56,
        backgroundColor: "#6A0DAD",
        borderRadius: 18,
        marginTop: 22,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        elevation: 3,
        shadowColor: "#6A0DAD",
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    registerButtonText: {
        fontFamily: "JosefinSans_700Bold",
        color: "#FFFFFF",
        fontSize: 16,
        letterSpacing: 1,
    },


    /* Login */

    loginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        gap: 5,
    },

    loginText: {
        fontFamily: "JosefinSans_400Regular",
        color: "#80698D",
        fontSize: 12,
    },

    loginButton: {
        fontFamily: "JosefinSans_700Bold",
        color: "#6A0DAD",
        fontSize: 12,
    },

});