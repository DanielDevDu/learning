void main() {
    bool isTrue = true;

    String visibility = isTrue ? "visible" : "hidden";

    print(visibility);
    isTrue = false;
    visibility = isTrue ? "visible" : "hidden";
    print(visibility);

    var name;
    String playerName(String? name) => name ?? 'Guest';
    // // Slightly longer version uses ?: operator.
    // String playerName(String? name) => name != null ? name : 'Guest';
    print(playerName(name));
}